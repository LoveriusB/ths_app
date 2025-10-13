import { PropsWithChildren } from "react";
import { ContextLoaderProvider } from "../contexts/ContextLoader";
import { RegistrationContextProvider } from "../contexts/RegistrationContext";

export const ContextWrappers = ({ children }: PropsWithChildren) => {
  return (
    <ContextLoaderProvider>
      <RegistrationContextProvider>{children}</RegistrationContextProvider>
    </ContextLoaderProvider>
  );
};
