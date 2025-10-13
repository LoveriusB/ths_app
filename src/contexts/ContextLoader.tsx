import { createContext, ReactNode } from "react";
import { ContextLoaderInterface, fetchAllData } from "../commons-utils";
import { useQuery } from "@tanstack/react-query";
import { useAmplify } from "../hooks/useAmplify";
import { useUser } from "../hooks/useUser";
import { isNil } from "lodash";

export const ContextLoader = createContext<ContextLoaderInterface | null>(null);
export const ContextLoaderProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const client = useAmplify();
  const { user } = useUser();
  console.log("USER:", user);
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: () => fetchAllData(client, !isNil(user)),
  });
  console.log("DATA:", data);
  if (isLoading) return <div>Chargement des données…</div>;

  const value = {
    isLoading,
    ...data,
  };
  return (
    <ContextLoader.Provider value={value}>{children}</ContextLoader.Provider>
  );
};
