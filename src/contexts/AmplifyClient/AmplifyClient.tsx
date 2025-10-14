// libs/shared-react-resources/src/amplify/context.tsx
import { createContext } from "react";
import amplifyConfig from "../../../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { Client, generateClient } from "aws-amplify/api";
import { Schema } from "../../../amplify/backend";

export type AmplifyClient = Client<Schema>;

export const AmplifyClientContext = createContext<AmplifyClient | null>(null);

export const AmplifyClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  console.log(JSON.stringify({ amplifyConfig }));
  // amorce au montage du provider
  Amplify.configure(amplifyConfig);
  const client = generateClient<Schema>({
    authMode: "userPool",
  });
  return (
    <AmplifyClientContext.Provider value={client}>
      {children}
    </AmplifyClientContext.Provider>
  );
};
