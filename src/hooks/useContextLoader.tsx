import { useContext } from "react";
import { ContextLoader } from "../contexts/contextLoader/ContextLoader";

export const useContextLoader = () => {
  const context = useContext(ContextLoader);
  if (!context) {
    throw new Error(
      "useContextLoader must be used within a FoldersContextProvider"
    );
  }
  return context;
};
