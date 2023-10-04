import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { DEFAULT_MODEL, OpenAi } from './OpenAi';
import { MessageHistory } from './history/MessageHistory';
import { Function } from './Function';
import { Logger, LogLevel, Fs } from '@brentbahry/util';
import { MessageModerator } from './history/MessageModerator';
import { ConversationModule } from './ConversationModule';
import { TiktokenModel, encoding_for_model } from 'tiktoken';

export type ConversationParams = {
  name: string,
  modules?: ConversationModule[];
  logLevel?: LogLevel;
}

export class Conversation {
  private static TOKEN_LIMIT = 3000;
  private history = new MessageHistory();
  private systemMessages: ChatCompletionMessageParam[] = [];
  private functions: Function[] = [];
  private messageModerators: MessageModerator[] = [];
  private generatedCode = false;
  private generatedList = false;
  private logger: Logger;
  private params: ConversationParams;

  constructor(params: ConversationParams) {
    this.params = params;
    this.logger = new Logger(params.name, params.logLevel);
    if (params.modules)
      this.addModules(params.modules);

    this.addFunctions('Conversation', [
      summarizeConversationHistoryFunction(this),
    ]);
  }

  private addModules(modules: ConversationModule[]) {
    for (let module of modules) {
      if (module.getSystemMessages().length < 1)
        continue;

      this.addSystemMessagesToHistory([
        `The following are instructions from the ${module.getName()} module: ${module.getSystemMessages().join('. ')}`,
      ]);
      this.addFunctions(module.getName(), module.getFunctions());
      this.addMessageModerators(module.getMessageModerators());
    }
  }

  private addFunctions(moduleName: string, functions: Function[]) {
    this.functions.push(...functions);
    let functionInstructions = `The following are instructions from functions in the ${moduleName} module:`;
    let functionInstructionsAdded = false;
    for (let f of functions) {
      if (f.instructions) {
        if (!f.instructions || f.instructions.length < 1)
          continue;

        functionInstructionsAdded = true;
        const instructionsParagraph = f.instructions.join('. ');
        functionInstructions += ` ${f.definition.name}: ${instructionsParagraph}.`;
      }
    }

    if (!functionInstructionsAdded)
      return;

    this.addSystemMessagesToHistory([functionInstructions]);
  }

  private addMessageModerators(messageModerators: MessageModerator[]) {
    this.messageModerators.push(...messageModerators);
  }

  private async enforceTokenLimit(messages: string[], model?: TiktokenModel) {
    const resolvedModel = model ? model : DEFAULT_MODEL;
    const encoder = encoding_for_model(resolvedModel);
    const conversation = this.history.toString() + messages.join('. ');
    const encoded = encoder.encode(conversation);
    if (encoded.length < Conversation.TOKEN_LIMIT)
      return;

    const summarizeConversationRequest = `First, call the ${summarizeConversationHistoryFunctionName} function`;
    await OpenAi.generateResponse([summarizeConversationRequest], model, this.history, this.functions, this.messageModerators, this.params.logLevel);
    const referenceSummaryRequest = `If there's a file mentioned in the conversation summary, find and read the file to better respond to my next request`;
    await OpenAi.generateResponse([referenceSummaryRequest], model, this.history, this.functions, this.messageModerators, this.params.logLevel);
  }

  summarizeConversationHistory(summary: string) {
    this.clearHistory();
    this.history.push([{ role: 'assistant', content: `Previous conversation summary: ${summary}` }]);
  }

  private clearHistory() {
    this.history = new MessageHistory();
    this.history.push(this.systemMessages);
  }

  addSystemMessagesToHistory(messages: string[]) {
    const chatCompletions: ChatCompletionMessageParam[] = messages.map(message => { return { role: 'system', content: message }});
    this.history.push(chatCompletions);
    this.systemMessages.push(...chatCompletions);
  }

  addAssistantMessagesToHistory(messages: string[]) {
    this.history.push(messages.map(message => { return { role: 'assistant', content: message }}));
  }

  addUserMessagesToHistory(messages: string[]) {
    this.history.push(messages.map(message => { return { role: 'user', content: message }}));
  }

  async generateResponse(messages: string[], model?: TiktokenModel) {
    await this.enforceTokenLimit(messages, model);
    return await OpenAi.generateResponse(messages, model, this.history, this.functions, this.messageModerators, this.params.logLevel);
  }

  async generateCode(description: string[], model?: TiktokenModel) {
    this.logger.info(`Generating code for description:\n${description.join('\n')}`);
    const code = await OpenAi.generateCode(description, model, this.history, this.functions, this.messageModerators, !this.generatedCode, this.params.logLevel);
    this.logger.info(`Generated code:\n${code.slice(0, 150)}${code.length > 150 ? '...' : ''}`);
    this.generatedCode = true;
    return code;
  }

  async updateCodeFromFile(codeToUpdateFilePath: string, dependencyCodeFilePaths: string[], description: string, model?: TiktokenModel) {
    const codeToUpdate = await Fs.readFile(codeToUpdateFilePath);
    let dependencyDescription = `Assume the following exists:\n`;
    for (let dependencyCodeFilePath of dependencyCodeFilePaths) {
      const dependencCode = await Fs.readFile(dependencyCodeFilePath);
      dependencyDescription += dependencCode + '\n\n';
    }

    this.logger.info(`Updating code from file: ${codeToUpdateFilePath}`);
    return await this.updateCode(codeToUpdate, dependencyDescription + description, model);
  }

  async updateCode(code: string, description: string, model?: TiktokenModel) {
    this.logger.info(`Updating code:\n${code.slice(0, 150)}${code.length > 150 ? '...' : ''}\nFrom description: ${description}`);
    const updatedCode = await OpenAi.updateCode(code, description, model, this.history, this.functions, this.messageModerators, !this.generatedCode, this.params.logLevel);
    this.logger.info(`Updated code:\n${updatedCode.slice(0, 150)}${updatedCode.length > 150 ? '...' : ''}`);
    this.generatedCode = true;
    return updatedCode;
  }

  async generateList(description: string[], model?: TiktokenModel) {
    const list = await OpenAi.generateList(description, model, this.history, this.functions, this.messageModerators, !this.generatedList, this.params.logLevel);
    this.generatedList = true;
    return list;
  }
}

export const summarizeConversationHistoryFunctionName = 'summarizeConversationHistory';
export const summarizeConversationHistoryFunction = (conversation: Conversation) => {
  return {
    definition: {
      name: summarizeConversationHistoryFunctionName,
      description: 'Clear the conversation history and summarize what was in it',
      parameters: {
        type: 'object',
        properties: {
          summary: {
            type: 'string',
            description: 'A 1-3 sentence summary of the current chat history',
          },
        },
        required: ['summary']
      },
    },
    call: async (params: { summary: string }) => conversation.summarizeConversationHistory(params.summary),
  }
}