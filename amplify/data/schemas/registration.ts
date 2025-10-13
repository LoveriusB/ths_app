import { a } from '@aws-amplify/backend';

export const registrationSchema = a
  .model({
    id: a
      .id()
      .authorization((allow) => [
        allow.authenticated().to(['read']),
        allow.guest().to(['read']),
      ]),
    firstName: a
      .string()
      .authorization((allow) => [allow.authenticated().to(['read'])]),
    // NOK
    lastName: a
      .string()
      .authorization((allow) => [allow.authenticated().to(['read'])]),
    // NOK
    email: a
      .email()
      .authorization((allow) => [allow.authenticated().to(['read'])]),
    // NOK
    age: a
      .float()
      .authorization((allow) => [allow.authenticated().to(['read'])]),

    callSign: a
      .string()
      .authorization((allow) => [
        allow.guest().to(['read']),
        allow.authenticated().to(['read']),
      ])
      .required(),
    team: a
      .string()
      .authorization((allow) => [
        allow.guest().to(['read']),
        allow.authenticated().to(['read']),
      ])
      .required(),
    // NOK
    stripePaymentStatus: a
      .ref('stripePaymentStatus')
      .authorization((allow) => [allow.authenticated().to(['read'])]),
    // NOK
    amountTotalCents: a
      .float()
      .authorization((allow) => [allow.authenticated().to(['read'])]),

    mailSent: a
      .boolean()
      .default(false)
      .authorization((allow) => [allow.authenticated().to(['read'])]),
    // NOK
    orga: a
      .boolean()
      .default(false)
      .authorization((allow) => [
        allow.guest().to(['read']),
        allow.authenticated().to(['read']),
      ])
      .required(),

    createdAt: a
      .datetime()
      .authorization((allow) => [allow.authenticated().to(['read'])]),
    updatedAt: a
      .datetime()
      .authorization((allow) => [allow.authenticated().to(['read'])]),
  })
  // Niveau modèle : pas de guest ici
  .authorization((allow) => [allow.authenticated().to(['read'])]);
