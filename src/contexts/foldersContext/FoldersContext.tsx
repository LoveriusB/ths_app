import { createContext } from "react";
import { FoldersContextInterface } from "../../commons-utils";

export const FoldersContext = createContext<FoldersContextInterface | null>(
  null
);
