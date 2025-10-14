import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { Schema } from "../amplify/backend";
import amplifyConfig from "../amplify_outputs.json";

Amplify.configure(amplifyConfig);
export const amplifyClient = generateClient<Schema>({
  authMode: "userPool",
});
