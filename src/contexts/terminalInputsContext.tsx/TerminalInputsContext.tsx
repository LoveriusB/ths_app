/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  TerminalInputsContextInterface,
  TerminalInputsContextProviderInterface,
  ICommandHistory,
} from "../../commons-utils";
import { createContext } from "react";

export enum UserContextActions {
  "CLEAR_BUFFER" = "CLEAR_BUFFER",
  "SET_COMMAND_HISTORY" = "SET_COMMAND_HISTORY",
  "ADD_COMMAND_HISTORY" = "ADD_COMMAND_HISTORY",
  "CLEAR_COMMAND_HISTORY" = "CLEAR_COMMAND_HISTORY",
}

type Action =
  | {
      type: typeof UserContextActions.SET_COMMAND_HISTORY;
      payload: ICommandHistory[] | null;
    }
  | {
      type: typeof UserContextActions.ADD_COMMAND_HISTORY;
      payload: { history: ICommandHistory[]; loading: boolean };
    }
  | {
      type: typeof UserContextActions.CLEAR_COMMAND_HISTORY;
    }
  | {
      type: typeof UserContextActions.CLEAR_BUFFER;
    };

export interface TerminalInputsContextReducer {
  inputsHistory: ICommandHistory[];
  loading: boolean;
}

export const contextReducer = (
  state: TerminalInputsContextReducer,
  action: Action
) => {
  switch (action.type) {
    case UserContextActions.SET_COMMAND_HISTORY:
      return {
        ...state,
        inputsHistory: action.payload || [],
      };
    case UserContextActions.ADD_COMMAND_HISTORY:
      return {
        ...state,
        inputsHistory: [
          ...state.inputsHistory,
          ...(action.payload.history as ICommandHistory[]),
        ],
        loading: action.payload.loading,
      };
    case UserContextActions.CLEAR_COMMAND_HISTORY:
      return {
        ...state,
        inputsHistory: [],
      };
    case UserContextActions.CLEAR_BUFFER:
      return {
        ...state,
        buffer: [],
      };
    default:
      return state;
  }
};

export const initialState: TerminalInputsContextInterface = {
  inputsHistory: [],
  loading: false,
};

export const TerminalInputsContext = createContext<TerminalInputsContextProviderInterface | null>(
  null
);
