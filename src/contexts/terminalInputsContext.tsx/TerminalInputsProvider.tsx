import { isEmpty } from "lodash";
import {
  ReactNode,
  useReducer,
  useState,
  useRef,
  useCallback,
  useMemo,
} from "react";
import { ICommandHistory } from "../../commons-utils";
import {
  contextReducer,
  initialState,
  UserContextActions,
  TerminalInputsContext,
} from "./TerminalInputsContext";

export const TerminalInputsContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(contextReducer, initialState);
  const [currentInput, setCurrentInput] = useState<string>("");
  const buffer = useRef<ICommandHistory[]>([]);
  const textFieldRef = useRef<HTMLInputElement>(null);

  const setCommandHistory = (history: ICommandHistory[] | null) => {
    dispatch({
      type: UserContextActions.SET_COMMAND_HISTORY,
      payload: history,
    });
  };

  const addCommandHistory = useCallback(
    (history: ICommandHistory[], loading = false) => {
      dispatch({
        type: UserContextActions.ADD_COMMAND_HISTORY,
        payload: {
          history: [
            ...history,
            ...(!isEmpty(buffer.current) ? [buffer.current.pop()!] : []),
          ],
          loading,
        },
      });

      clearBuffer(); // Clear the buffer after adding to history
    },
    []
  );

  const getRandomDelay = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  const showNext = useCallback(
    (
      index: number,
      fullBuffer: ICommandHistory[],
      resolve: (value: void | PromiseLike<void>) => void
    ) => {
      if (index >= fullBuffer.length) {
        resolve();
        return;
      }
      const nextHistoryItem = fullBuffer[index];
      addCommandHistory([nextHistoryItem], index !== fullBuffer.length - 1);
      const delay =
        index === fullBuffer.length - 1 ? 0 : getRandomDelay(50, 200);
      setTimeout(() => showNext(index + 1, fullBuffer, resolve), delay);
    },
    [addCommandHistory]
  );

  const playBufferedCommands = useCallback(
    (history: ICommandHistory[]): Promise<void> => {
      return new Promise((resolve) => {
        if (isEmpty(history)) {
          resolve();
          return;
        }
        buffer.current = [...history, ...buffer.current].flat();
        const fullBuffer = [...buffer.current]; // snapshot
        clearBuffer(); // Empty to avoid double injection

        showNext(0, fullBuffer, resolve); // start recursion
      });
    },
    [showNext]
  );

  const clearCommandHistory = () => {
    dispatch({
      type: UserContextActions.CLEAR_COMMAND_HISTORY,
    });
  };

  const addMessageToBuffer = (messages: JSX.Element[]) => {
    buffer.current = [
      ...messages.map((message) => ({
        historyPrompt: "",
        input: "",
        userEntered: false,
        response: message,
      })),
      ...buffer.current,
    ];
  };

  const clearInput = () => {
    if (!textFieldRef?.current) {
      return;
    }
    textFieldRef.current.value = ""; // Clear the input field
    setCurrentInput(""); // Clear the current input state
  };

  const focusInput = () => {
    if (textFieldRef.current) {
      textFieldRef.current.focus();
    }
  };

  const clearBuffer = () => {
    buffer.current = [];
  };

  const value = useMemo(
    () => ({
      ...state,
      textFieldRef,
      currentInput,

      playBufferedCommands,
      addCommandHistory,
      addMessageToBuffer,
      clearBuffer,
      clearCommandHistory,
      clearInput,
      focusInput,
      setCommandHistory,
      setCurrentInput,
    }),
    [state, currentInput, addCommandHistory, playBufferedCommands] // Dependencies for useMemo
  );

  return (
    <TerminalInputsContext.Provider value={value}>
      {children}
    </TerminalInputsContext.Provider>
  );
};
