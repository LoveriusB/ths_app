import { type ClientSchema, a, defineData } from '@aws-amplify/backend';
import { stripePayment } from '../functions/stripePayment/resource';
import { registerPlayers } from '../functions/registerPlayers/resource';
import { registrationSchema } from './schemas/registration';
import { makeStripePaymentSchema } from './schemas/stripePayment';
import { registerPlayersSchema } from './schemas/registerPlayers';
import { playerSchema } from './schemas/playerSchema';

const schema = a
  .schema({
    stripePaymentStatus: a.enum(['pending', 'completed']),
    player: playerSchema,
    registration: registrationSchema,
    makeStripePayment: makeStripePaymentSchema,
    registerPlayer: registerPlayersSchema,
  })
  .authorization((allow) => [
    allow.resource(registerPlayers).to(['listen', 'query', 'mutate']),
    allow.resource(stripePayment).to(['listen', 'query', 'mutate']),
  ]);

export type Schema = ClientSchema<typeof schema>;
export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});
