import { createContext } from "react";
import { ContextLoaderInterface } from "../../commons-utils";

export const ContextLoader = createContext<ContextLoaderInterface | null>(null);
