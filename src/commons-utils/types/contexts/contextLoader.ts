import { Client } from "aws-amplify/api";
import { Schema } from "../../../../amplify/backend";

type client = Client<Schema>;

export type ModelKey = keyof client["models"];
export type AllModels = { [K in ModelKey]: Schema[K]["type"][] };
export type AllModelsPartial = { [K in ModelKey]?: Schema[K]["type"][] };

export interface ContextLoaderInterface extends AllModelsPartial {
  /**
   * Is loading ?
   */
  isLoading: boolean;
}
