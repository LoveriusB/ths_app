
import { createContext } from 'react';
import {
  AuthUser,
  type SignOutInput,
  type SignInOutput,
  type SignInInput,
  type ConfirmSignInInput,
  type ConfirmSignInOutput,
} from 'aws-amplify/auth';

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
