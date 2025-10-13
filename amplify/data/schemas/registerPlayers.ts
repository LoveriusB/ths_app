import { a } from '@aws-amplify/backend';
import { registerPlayers } from '../../functions/registerPlayers/resource';

export const registerPlayersSchema = a
  .query()
  .returns(a.boolean())
  .authorization((allow) => [allow.authenticated()])
  .handler(a.handler.function(registerPlayers));
