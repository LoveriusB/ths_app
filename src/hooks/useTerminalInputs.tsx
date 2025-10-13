import { useContext } from 'react';
import { TerminalInputsContext } from '../contexts/TerminalInputsContext';

export const useTerminalInputs = () => {
  const context = useContext(TerminalInputsContext);

  if (!context) {
    throw new Error(
      'useTerminalInputs must be used within a TerminalInputsContextProvider'
    );
  }

  return context;
};
