import { Client } from 'aws-amplify/api';
import { type Schema } from '../../../amplify/backend'

const filters = {
  registration: { stripePaymentStatus: { eq: 'completed' } },
};

const fetchDataFromDB = async (
  client: Client<Schema>,
  isAuthenticated: boolean,
) => {
  return await Promise.all(
    Object.keys(client.models).map(async (key) => {
      let nextToken: string | undefined = undefined;
      type allType = Schema[Extract<
        typeof key,
        keyof typeof client.models
      >]['type'][];

      const all: allType = [];

      do {
        const { data, nextToken: nt } = await client.models[
          key as keyof typeof client.models
        ].list({
          limit: 300,
          nextToken,
          filter: filters[key as keyof typeof filters],
          ...(!isAuthenticated ? { authMode: 'identityPool' } : {}),
        });
        all.push(...(data as allType));
        if (!nt) return [key, all as allType];
        nextToken = nt as string | undefined;
      } while (nextToken);
      return [key, all as allType];
    }),
  );
};

export const fetchAllData = async (
  client: Client<Schema>,
  isAuthenticated = false,
) => {
  const entries = await fetchDataFromDB(client, isAuthenticated);
  const data = Object.fromEntries(entries) as {
    [K in keyof typeof client.models]: Schema[K]['type'][];
  };

  return data;
};
