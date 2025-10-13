import React, { useEffect, useMemo, useReducer } from "react";
import { Schema } from "../../amplify/backend";
import { useContextLoader } from "../hooks/useContextLoader";

enum RegistrationContextActions {
  "SET_REGISTRATION_CONTEXT" = "SET_REGISTRATION_CONTEXT",
  "SET_IS_LOADING" = "SET_IS_LOADING",
}

export interface RegistrationContext {
  /**
   * The actual main value of the context
   */
  registration: Schema["registration"]["type"][];

  /**
   * is the registrationContext still loading ?
   */
  isLoading: boolean;

  /**
   * get the item corresponding to the id set in params.
   */
  getItem: (id: string) => Schema["registration"]["type"] | undefined;

  /**
   * Get the amount of registrations with orga = true
   */
  getAmountOfOrgaRegistration: () => number;
}

type Action =
  | {
      type: typeof RegistrationContextActions.SET_REGISTRATION_CONTEXT;
      payload: Schema["registration"]["type"][];
    }
  | {
      type: typeof RegistrationContextActions.SET_IS_LOADING;
      payload: boolean;
    };

interface RegistrationContextStateInterface {
  registration: Schema["registration"]["type"][];
  isLoading: boolean;
}

const initialState: RegistrationContextStateInterface = {
  registration: [],
  isLoading: true,
};

const registrationContextReducer = (
  state: RegistrationContextStateInterface,
  action: Action
) => {
  switch (action.type) {
    case RegistrationContextActions.SET_REGISTRATION_CONTEXT:
      return {
        ...state,
        registration: action.payload,
        isLoading: false,
      };
    case RegistrationContextActions.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};

export const registrationContext = React.createContext<RegistrationContext | null>(
  null
);

export const RegistrationContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    registrationContextReducer,
    initialState
  );
  const { isLoading, registration } = useContextLoader();

  useEffect(() => {
    let unmounted = false;
    const fetchData = () => {
      if (!unmounted) {
        dispatch({
          type: RegistrationContextActions.SET_REGISTRATION_CONTEXT,
          payload: registration ?? [],
        });
      }
    };
    fetchData();
    return () => {
      unmounted = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  const getItem = (id: string) => {
    return state.registration.find((item) => item.id === id);
  };

  const getAmountOfOrgaRegistration = () => {
    return state.registration.filter((item) => item.orga).length;
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
      getAmountOfOrgaRegistration,
    }),
    // let's not reset value each render...
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  return (
    <registrationContext.Provider value={value}>
      {children}
    </registrationContext.Provider>
  );
};
