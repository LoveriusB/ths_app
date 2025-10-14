import { PropsWithChildren } from "react";
import { ContextLoaderProvider } from "../contexts/contextLoader/ContextLoaderProvider";
import { RegistrationContextProvider } from "../contexts/registrationContext.tsx/RegistrationProvider";

export const ContextWrappers = ({ children }: PropsWithChildren) => {
  return (
    <ContextLoaderProvider>
      <RegistrationContextProvider>{children}</RegistrationContextProvider>
    </ContextLoaderProvider>
  );
};
