import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { storage } from "./storage/resource";
import { stripePayment } from "./functions/stripePayment/resource";
import { registerPlayers } from "./functions/registerPlayers/resource";
import { FunctionUrlAuthType } from "aws-cdk-lib/aws-lambda";

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data,
  storage,
  stripePayment,
  registerPlayers,
});

const registerPlayersUrl = backend.registerPlayers.resources.lambda.addFunctionUrl(
  {
    authType: FunctionUrlAuthType.NONE,
  }
);

backend.addOutput({
  custom: {
    registerPlayers: registerPlayersUrl.url,
  },
});


export type { Schema } from './data/resource';