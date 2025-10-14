import { PropsWithChildren } from "react";
import { TerminalInputsContextProvider } from "../contexts/terminalInputsContext.tsx/TerminalInputsProvider";
import { FoldersContextProvider } from "../contexts/foldersContext/FoldersProvider";
import { WindowsContextProvider } from "../contexts/windowsContext/WindowsProvider";
export const TerminalContextWrappers = ({ children }: PropsWithChildren) => {
  return (
    <TerminalInputsContextProvider>
      <FoldersContextProvider>
        <WindowsContextProvider>{children}</WindowsContextProvider>
      </FoldersContextProvider>
    </TerminalInputsContextProvider>
  );
};
