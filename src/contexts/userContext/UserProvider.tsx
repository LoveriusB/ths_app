import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  confirmSignIn,
  signIn,
  signOut,
  type ConfirmSignInInput,
  type ConfirmSignInOutput,
  type SignInInput,
  type SignInOutput,
  type SignOutInput,
} from "aws-amplify/auth";
import { ReactNode } from "react";
import { getAuthUser } from "../../commons-utils";
import { UserContext } from "./UserContext";

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = useQueryClient();
  const { data: user, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => getAuthUser(),
  });

  const adminSignIn = async (input: SignInInput) => {
    const result: SignInOutput = await signIn(input);
    console.log(result);
    if (result.isSignedIn) {
      const result = await getAuthUser();
      queryClient.setQueryData(["authUser"], result);
    }
    return result;
  };

  const adminSignOut = async (input: SignOutInput) => {
    await signOut(input);
    queryClient.setQueryData(["authUser"], null);
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
