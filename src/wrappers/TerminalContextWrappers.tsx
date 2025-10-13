import { PropsWithChildren } from "react";
import { TerminalInputsContextProvider } from "../contexts/TerminalInputsContext";
import { FoldersContextProvider } from "../contexts/FoldersContext";
import { WindowsContextProvider } from "../contexts/WindowsContext";
export const TerminalContextWrappers = ({ children }: PropsWithChildren) => {
  return (
    <TerminalInputsContextProvider>
      <FoldersContextProvider>
        <WindowsContextProvider>{children}</WindowsContextProvider>
      </FoldersContextProvider>
    </TerminalInputsContextProvider>
  );
};
