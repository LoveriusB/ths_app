import { Grid, Typography } from "@mui/material";
import { FC } from "react";
import useFolders from "../../../../hooks/useFolders";
import { useTerminalInputs } from "../../../../hooks/useTerminalInputs";

interface InputTextFieldProps {
  currentInput?: string;
}

export const TerminalInputs: FC<InputTextFieldProps> = ({ currentInput }) => {
  const { inputsHistory, loading: inputsLoading } = useTerminalInputs();
  const { getPromptSnapshot } = useFolders();

  return (
    <Grid>
      {inputsHistory.map((input, index) => {
        return (
          <Grid key={index}>
            <Grid display={"flex"} gap={1}>
              {input.userEntered && <Grid>{input.historyPrompt}</Grid>}
              <Typography>{input.input}</Typography>
            </Grid>
            {input.response || null}
          </Grid>
        );
      })}
      {!inputsLoading && (
        <Grid display={"flex"} gap={1}>
          {getPromptSnapshot()}
          <Typography>{currentInput || ""}</Typography>
        </Grid>
      )}
    </Grid>
  );
};
