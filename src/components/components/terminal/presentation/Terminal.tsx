import { Grid } from "@mui/material";
import { ChangeEvent, KeyboardEvent, useEffect, useRef } from "react";
import {
  CommandNames,
  executeCommands,
  getCommandData,
  getCommandName,
} from "../commands";
import { InputTextField } from "./InputTextField";
import { TerminalInputs } from "./TerminalInputs";
import { Window } from "./window/Window";
// import { useContextProviders } from '@ths-monorepo/shared-react-resources';
import { isNil } from "lodash";
import useFolders from "../../../../hooks/useFolders";
import { useTerminalInputs } from "../../../../hooks/useTerminalInputs";
import { useWindows } from "../../../../hooks/useWindows";
import { Introduction } from "./Introduction";

export const Terminal = () => {
  const terminalContext = useTerminalInputs();
  const folderContext = useFolders();
  const windowContext = useWindows();
  const mainGridRef = useRef<HTMLDivElement | null>(null);

  const dependencies = {
    folderContext,
    terminalContext,
    windowContext,
  };

  useEffect(() => {
    terminalContext.focusInput();
  });

  const nonHistoryCommands = [CommandNames.CLEAR];

  const buffLogs = (messages: React.JSX.Element[] | undefined) => {
    if (isNil(messages) || messages.length === 0) {
      return;
    }
    messages.forEach((message) => {
      terminalContext.addMessageToBuffer([message]);
    });
  };

  const onKeyDown = async (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" || terminalContext.currentInput === "") {
      return;
    }
    const historyPrompt = folderContext.getPromptSnapshot();
    const inputSnapshot = terminalContext.currentInput;
    const commandName = getCommandName(inputSnapshot);
    terminalContext.clearInput();
    const { response, toBeBuffered, toBeExecuted } = getCommandData(
      inputSnapshot,
      dependencies
    );
    // Command (like CLEAR) might not need to be pushed in history
    const pushInHistory = !nonHistoryCommands.includes(commandName);
    buffLogs(toBeBuffered?.reverse());
    if (pushInHistory)
      await terminalContext.playBufferedCommands([
        { input: inputSnapshot, historyPrompt, response, userEntered: true },
      ]);

    executeCommands(toBeExecuted);
    // TODO: get the right hight
    window.scrollTo({ top: mainGridRef.current?.clientHeight });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    terminalContext.setCurrentInput(event.target.value);
  };

  return (
    <Grid
      onClick={terminalContext.focusInput}
      style={{ minHeight: "100vh" }}
      ref={mainGridRef}
    >
      <InputTextField
        inputRef={terminalContext.textFieldRef}
        onKeyDown={onKeyDown}
        onChange={onChange}
      />
      {/* <AsciiWelcome /> */}
      {/* <Divider variant="fullWidth" slot="=" /> */}
      <Introduction />
      <TerminalInputs currentInput={terminalContext.currentInput} />
      {windowContext.allWindows.map((windowItem) => (
        <Window
          key={windowItem.id}
          {...windowItem}
          windowsContext={windowContext}
        />
      ))}
    </Grid>
  );
};
