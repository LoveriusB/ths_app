import { generateClient } from "aws-amplify/api";
import { Schema } from "../amplify/backend";

export const amplifyClient = generateClient<Schema>({
  authMode: "userPool",
});
