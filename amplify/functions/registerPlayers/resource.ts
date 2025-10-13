import { defineFunction } from '@aws-amplify/backend';

export const registerPlayers = defineFunction({
  name: 'register-players',
  entry: './handler.ts',
});
