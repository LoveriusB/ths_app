/* eslint-disable no-var */
// libs/shared-react-resources/src/amplify/runtime.ts
import { Amplify } from 'aws-amplify';
import { generateClient, type Client } from 'aws-amplify/data';
import { type Schema } from '../../../amplify/backend';
import amplifyConfig from '../../../amplify_outputs.json';

declare global {
  var __amplifyConfigured: boolean | undefined;
  var __amplifyClient: Client<Schema> | undefined;
}

export type AmplifyClient = Client<Schema>;

export function getAmplifyClient(): AmplifyClient {
  if (!globalThis.__amplifyConfigured) {
    Amplify.configure(amplifyConfig);
    globalThis.__amplifyConfigured = true;
  }
  if (!globalThis.__amplifyClient) {
    globalThis.__amplifyClient = generateClient<Schema>({
      authMode: 'userPool',
    });
  }
  return globalThis.__amplifyClient;
}
