import { useContext } from 'react';
import { registrationContext } from '../contexts/RegistrationContext';
import { isNil } from 'lodash';

export const useRegistrationContext = () => {
  const context = useContext(registrationContext);
  if (isNil(context)) {
    throw new Error(
      'useRegistrationContext must be used within a RegistrationContextProvider'
    );
  }
  return context;
};
