import { a } from '@aws-amplify/backend';

export const playerSchema = a.customType({
  email: a.email().required(),
  callSign: a.string().required(),
  firstName: a.string().required(),
  lastName: a.string().required(),
  age: a.integer().required(),
});
