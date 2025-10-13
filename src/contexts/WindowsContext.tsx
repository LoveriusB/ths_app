import React, { useMemo, useReducer } from "react";
import { IWindowsContext, WindowItem } from "../commons-utils";
// import { getUrl } from '@ths-monorepo/amplify-ths';

enum WindowsContextActions {
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

const initialState: WindowsContextStateInterface = {
  allWindows: [],
  loading: false,
};

const windowsContextReducer = (
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

export const WindowsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(windowsContextReducer, initialState);

  const getItem = (id: string) => {
    return state.allWindows.find((item) => item.id === id);
  };

  const createWindow = async (fileName: string) => {
    try {
      // const url = (await createUrl(fileName)).url;
      const url = new URL("");
      const windowItem: WindowItem = {
        id: crypto.randomUUID(),
        title: fileName,
        isHidden: false,
        position: { x: 200, y: 200 },
        isWindowFocused: true,
        minSize: { width: 300, height: 600 },
        initialSize: { width: 300, height: 600 },
        url: url,
        type: "image",
      };

      dispatch({
        type: WindowsContextActions.SET_DATA,
        payload: {
          allWindows: [...state.allWindows, windowItem],
          loading: false,
        },
      });
      return url;
    } catch (error) {
      console.error("Error creating URL:", error);
      return;
    }
  };

  const openWindow = (fileName: string) => {
    try {
      dispatch({
        type: WindowsContextActions.SET_CONTEXT_LOADING,
        payload: true,
      });
      createWindow(fileName);
    } catch (error) {
      console.error("Error opening window:", error);
      dispatch({
        type: WindowsContextActions.SET_CONTEXT_LOADING,
        payload: false,
      });
      throw error;
    }
  };

  const closeWindow = (id: string) => {
    dispatch({
      type: WindowsContextActions.SET_WINDOWS,
      payload: state.allWindows.filter((item) => item.id !== id),
    });
  };

  /**
   * This should avoid a change on every render.
   * Those values shall be changed ONLY if the state changes.
   * The functions will never change, so not needed in the array of dependencies
   */
  const value = useMemo(
    () => ({
      ...state,
      getItem,
      openWindow,
      closeWindow,
    }),
    // let's not reset value each render...
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  return (
    <WindowsContext.Provider value={value}>{children}</WindowsContext.Provider>
  );
};
