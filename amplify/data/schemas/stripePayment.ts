import { a } from '@aws-amplify/backend';
import { stripePayment } from '../../functions/stripePayment/resource';

export const makeStripePaymentSchema = a
  .query()
  .arguments({
    team: a.string().required(),
    playersCount: a.integer().required(),
    players: a.ref('player').array().required(),
  })
  .returns(a.customType({ id: a.string().required(), error: a.string() }))
  .authorization((allow) => [allow.guest()])
  .handler(a.handler.function(stripePayment));
