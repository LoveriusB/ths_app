import { TextField } from '@mui/material';
import { ChangeEventHandler, FC, KeyboardEventHandler, Ref } from 'react';

interface InputTextFieldProps {
  inputRef?: Ref<unknown> | undefined;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement> | undefined;
  onChange?:
    | ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
}

export const InputTextField: FC<InputTextFieldProps> = ({
  inputRef,
  onKeyDown,
  onChange,
}) => {
  return (
    <TextField
      sx={{ position: 'absolute', left: -2000, top: 10000000 }}
      inputRef={inputRef}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};
