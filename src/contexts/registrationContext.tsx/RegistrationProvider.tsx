import { useEffect, useMemo, useReducer } from "react";
import { useContextLoader } from "../../hooks/useContextLoader";
import {
  initialState,
  registrationContext,
  RegistrationContextActions,
  registrationContextReducer,
} from "./RegistrationContext";
import { amplifyClient } from "../../amplifyClient";

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

  const updateMailSent = async (id: string) => {
    const item = getItem(id);
    if (!item) {
      console.warn("Item not found in updateMailSent");
      return;
    }
    item.mailSent = true;
    dispatch({
      type: RegistrationContextActions.SET_REGISTRATION_CONTEXT,
      payload: state.registration,
    });

    await amplifyClient.models.registration.update(item, {
      authMode: "userPool",
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
      getAmountOfOrgaRegistration,
      updateMailSent,
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
