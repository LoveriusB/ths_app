import { a } from "@aws-amplify/backend";

export const registrationSchema = a
  .model({
    id: a
      .id()
      .authorization((allow) => [
        allow.guest().to(["read"]),
        allow.authenticated().to(["read", "update"]),
      ])
      .required(),
    firstName: a.string(),
    // NOK
    lastName: a.string(),
    // NOK
    email: a.email(),
    // NOK
    age: a.float(),

    callSign: a
      .string()
      .authorization((allow) => [
        allow.guest().to(["read"]),
        allow.authenticated().to(["read", "update"]),
      ])
      .required(),
    team: a
      .string()
      .authorization((allow) => [
        allow.guest().to(["read"]),
        allow.authenticated().to(["read", "update"]),
      ])
      .required(),
    // NOK
    stripePaymentStatus: a.ref("stripePaymentStatus"),
    // NOK
    amountTotalCents: a.float(),

    mailSent: a.boolean().default(false),
    // NOK
    orga: a
      .boolean()
      .default(false)
      .authorization((allow) => [
        allow.guest().to(["read"]),
        allow.authenticated().to(["read", "update"]),
      ])
      .required(),

    createdAt: a.datetime(),
    updatedAt: a.datetime(),
  })
  // Niveau modèle : pas de guest ici
  .authorization((allow) => [allow.authenticated().to(["read", "update"])]);
