import { generateClient } from "aws-amplify/api";
import { Schema } from "../amplify/backend";
import { Amplify } from "aws-amplify";
import amplifyConfig from "../amplify_outputs.json";
console.log("Configuring amplify");
Amplify.configure(amplifyConfig);
console.log("Amplify configured");
console.log("Generating client");
export const amplifyClient = generateClient<Schema>({
  authMode: "userPool",
});
console.log("Client generated");
