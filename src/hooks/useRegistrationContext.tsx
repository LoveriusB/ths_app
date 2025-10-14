import { useContext } from "react";
import { isNil } from "lodash";
import { registrationContext } from "../contexts/registrationContext.tsx/RegistrationContext";

export const useRegistrationContext = () => {
  const context = useContext(registrationContext);
  if (isNil(context)) {
    throw new Error(
      "useRegistrationContext must be used within a RegistrationContextProvider"
    );
  }
  return context;
};
