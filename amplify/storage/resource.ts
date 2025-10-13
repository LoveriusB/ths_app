import { defineStorage } from '@aws-amplify/backend';

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/storage
 */
export const storage = defineStorage({
  name: 'thsStorage',
  access: (allow) => ({
    'pictures/*': [allow.guest.to(['read', 'write', 'delete'])],
    'videos/*': [allow.guest.to(['read', 'write', 'delete'])],
  }),
});
