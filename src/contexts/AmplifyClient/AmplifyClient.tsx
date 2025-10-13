// libs/shared-react-resources/src/amplify/context.tsx
import { createContext } from 'react';
import { getAmplifyClient, type AmplifyClient } from './AmplifyClientSingleton';

export const AmplifyClientContext = createContext<AmplifyClient | null>(null);

export const AmplifyClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  // amorce au montage du provider
  const client = getAmplifyClient();
  return (
    <AmplifyClientContext.Provider value={client}>
      {children}
    </AmplifyClientContext.Provider>
  );
};
