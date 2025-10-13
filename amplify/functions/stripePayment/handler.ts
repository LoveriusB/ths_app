import { Schema } from '../../data/resource';
import { createStripeSession, EVENT_PRICE } from './utils';
import * as V4 from 'uuidv4';

const MAW_PLAYERS = 150;

export const handler: Schema['makeStripePayment']['functionHandler'] = async (
  event,
) => {
  console.log(JSON.stringify({ event }));
  const { playersCount, players, team } = event.arguments;
  if (playersCount === undefined || players === undefined) {
    console.error('Invalid arguments');
    return { id: '' };
  }

  if (playersCount !== players.length) {
    console.error('Invalid players count');
    return { id: '' };
  }
  const { env } = await import('$amplify/env/stripe-payment');

  const { getAmplifyDataClientConfig } = await import(
    '@aws-amplify/backend/function/runtime'
  );
  const { Amplify } = await import('aws-amplify');
  const { generateClient } = await import('aws-amplify/data');

  const { resourceConfig, libraryOptions } =
    await getAmplifyDataClientConfig(env);

  Amplify.configure(resourceConfig, libraryOptions);
  const client = generateClient<Schema>();

  const existingRegistration = await client.models.registration.list({
    filter: { stripePaymentStatus: { eq: 'completed' } },
  });

  if (existingRegistration.errors?.length) {
    console.error(
      'Error creating registration:',
      existingRegistration.errors.map((e) => e.message).join(', '),
    );
  }

  const existingRegistrations = existingRegistration.data ?? [];
  if (existingRegistrations.length + playersCount > MAW_PLAYERS) {
    console.error('Not enough spots available, returning error');
    return { id: '', error: 'NotEnoughSpotsError' };
  }

  const id = V4.uuid();

  const registrations = players.map((p) => {
    return client.models.registration.create({
      id: V4.uuid(),
      orga: false,
      firstName: p?.firstName.trim() ?? '',
      lastName: p?.lastName.trim() ?? '',
      age: p?.age ?? -1,
      email: p?.email.trim() ?? '',
      callSign: p?.callSign.trim() ?? '',
      amountTotalCents: EVENT_PRICE,
      team: team.trim() ?? '',
      stripePaymentStatus: 'pending',
      mailSent: false,
    });
  });

  const data = await Promise.all(registrations);

  let error = '';

  data.forEach((d) => {
    if (d.errors?.length) {
      console.error(
        'Error creating registration:',
        d.errors.map((e) => e.message).join(', '),
      );
      error += d.errors.map((e) => e.message).join(', ');
    }
  });

  if (error) {
    console.error('Error creating registration:', error);
    throw new Error('Failed to create registration');
  }

  const session = await createStripeSession(
    playersCount ?? 1,
    id ?? '',
    data.map((r) => r.data as Schema['registration']['type']),
  );

  return { id: session.id ?? '' };
};
