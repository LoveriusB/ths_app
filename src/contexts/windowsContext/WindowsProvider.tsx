import { useMemo, useReducer } from "react";
import { WindowItem } from "../../commons-utils";
import {
  initialState,
  WindowsContext,
  WindowsContextActions,
  windowsContextReducer,
} from "./WindowsContext";

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
