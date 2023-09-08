import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port: number = 3000;

app.get('/hello', (req: Request, res: Response) => {
  res.send('world');
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export const stop = (): void => {
  server.close();
};