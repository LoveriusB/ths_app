import {
  AuthUser,
  confirmSignIn,
  signIn,
  signOut,
  type ConfirmSignInInput,
  type ConfirmSignInOutput,
  type SignInInput,
  type SignInOutput,
  type SignOutInput,
} from "aws-amplify/auth";
import { ReactNode, useEffect, useState } from "react";
import { getAuthUser } from "../../commons-utils";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      const authUser = await getAuthUser();
      setUser(authUser);
      setIsLoading(false);
    };
    fetchUser();
  }, [])

  const adminSignIn = async (input: SignInInput) => {
    const result: SignInOutput = await signIn(input);
    console.log(result);
    if (result.isSignedIn) {
      const result = await getAuthUser();
      setUser(result);
    }
    return result;
  };

  const adminSignOut = async (input: SignOutInput) => {
    await signOut(input);
    setUser(null);
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
