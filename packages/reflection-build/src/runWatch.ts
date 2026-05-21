#!/usr/bin/env node

import { watch } from './watch';

// Run the watcher in-process; no separate gulp process is spawned.
watch();
