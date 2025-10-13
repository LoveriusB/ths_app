import { isEmpty, isNil } from 'lodash';
import { Schema } from '../../../data/resource';

export const onPaymentSuccess = async (metadata: string[]) => {
  const { env } = await import('$amplify/env/stripe-payment');
  const { getAmplifyDataClientConfig } = await import(
    '@aws-amplify/backend/function/runtime'
  );
  const { Amplify } = await import('aws-amplify');
  const { generateClient } = await import('aws-amplify/data');

  const { resourceConfig, libraryOptions } = await getAmplifyDataClientConfig(
    env
  );
  Amplify.configure(resourceConfig, libraryOptions);
  const client = generateClient<Schema>();

  const promises = metadata.map((id) =>
    client.models.registration.update({
      id,
      stripePaymentStatus: 'completed',
    })
  );

  const results = await Promise.all(promises);

  const errors = results
    .filter((result) => !isNil(result.errors))
    .flatMap((result) => result.errors);

  if (!isEmpty(errors)) {
    console.error('Error updating registration:');
    throw new Error('Failed to update registration');
  }

  console.log('Payment was successful!');
};
