import React from "react";
import { IWindowsContext, WindowItem } from "../../commons-utils";
// import { getUrl } from '@ths-monorepo/amplify-ths';

export enum WindowsContextActions {
  "SET_DATA" = "SET_DATA",
  "SET_WINDOWS" = "SET_WINDOWS",
  "SET_CONTEXT_LOADING" = "SET_CONTEXT_LOADING",
  "ADD_WINDOW" = "ADD_WINDOW",
  "CLOSE_WINDOW" = "CLOSE_WINDOW",
}

type Action =
  | {
      type: typeof WindowsContextActions.SET_DATA;
      payload: Partial<IWindowsContext>;
    }
  | {
      type: typeof WindowsContextActions.SET_WINDOWS;
      payload: WindowItem[];
    }
  | {
      type: typeof WindowsContextActions.SET_CONTEXT_LOADING;
      payload: boolean;
    }
  | {
      type: typeof WindowsContextActions.ADD_WINDOW;
      payload: WindowItem;
    }
  | {
      type: typeof WindowsContextActions.CLOSE_WINDOW;
      payload: string;
    };

interface WindowsContextStateInterface {
  allWindows: WindowItem[];
  loading: boolean;
}

export const initialState: WindowsContextStateInterface = {
  allWindows: [],
  loading: false,
};

export const windowsContextReducer = (
  state: WindowsContextStateInterface,
  action: Action
) => {
  switch (action.type) {
    case WindowsContextActions.SET_DATA:
      return {
        ...state,
        ...action.payload,
      };

    case WindowsContextActions.SET_WINDOWS:
      return {
        ...state,
        allWindows: action.payload,
      };

    case WindowsContextActions.SET_CONTEXT_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case WindowsContextActions.ADD_WINDOW:
      return {
        ...state,
        allWindows: [...state.allWindows, action.payload],
      };

    default:
      return state;
  }
};

export const WindowsContext = React.createContext<IWindowsContext | null>(null);
