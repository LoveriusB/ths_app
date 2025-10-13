import { useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, ReactNode } from 'react';
import {
  AuthUser,
  signIn,
  confirmSignIn,
  signOut,
  type SignOutInput,
  type SignInOutput,
  type SignInInput,
  type ConfirmSignInInput,
  type ConfirmSignInOutput,
} from 'aws-amplify/auth';
import { getAuthUser } from '../commons-utils';

export interface IUserContext {
  user: AuthUser | null | undefined;
  isLoading: boolean;
  adminSignIn: (input: SignInInput) => Promise<SignInOutput>;
  adminSignOut: (input: SignOutInput) => Promise<void>;
  adminConfirmSignIn: (
    input: ConfirmSignInInput,
  ) => Promise<ConfirmSignInOutput>;
}

export const UserContext = createContext<IUserContext | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useQuery({
    queryKey: ['authUser'],
    queryFn: () => getAuthUser(),
  });

  const adminSignIn = async (input: SignInInput) => {
    const result: SignInOutput = await signIn(input);
    console.log(result);
    if (result.isSignedIn) {
      const result = await getAuthUser();
      queryClient.setQueryData(['authUser'], result);
    }
    return result;
  };

  const adminSignOut = async (input: SignOutInput) => {
    await signOut(input);
    queryClient.setQueryData(['authUser'], null);
  };

  const adminConfirmSignIn = async (input: ConfirmSignInInput) => {
    const result: ConfirmSignInOutput = await confirmSignIn(input);
    return result;
  };

  if (isLoading) return <div>Chargement…</div>;
  const value = {
    user,
    isLoading,
    adminSignIn,
    adminSignOut,
    adminConfirmSignIn,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
