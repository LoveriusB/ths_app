import React from "react";
import { Schema } from "../../../amplify/backend";

export enum RegistrationContextActions {
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

export interface RegistrationContextStateInterface {
  registration: Schema["registration"]["type"][];
  isLoading: boolean;
}

export const initialState: RegistrationContextStateInterface = {
  registration: [],
  isLoading: true,
};

export const registrationContextReducer = (
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
