import { useContext } from 'react';
import { AmplifyClientContext } from '../contexts/AmplifyClient/AmplifyClient';

export const useAmplify = () => {
  const context = useContext(AmplifyClientContext);
  if (!context) {
    throw new Error('useAmplify must be used within <AmplifyClientProvider>');
  }
  return context;
};
