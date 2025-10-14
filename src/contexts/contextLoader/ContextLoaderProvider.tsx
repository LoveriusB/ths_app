import { useQuery } from "@tanstack/react-query";
import { isNil } from "lodash";
import { ReactNode } from "react";
import { amplifyClient } from "../../amplifyClient";
import { fetchAllData } from "../../commons-utils";
import { useUser } from "../../hooks/useUser";
import { ContextLoader } from "./ContextLoader";

export const ContextLoaderProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { user } = useUser();
  const { data, isLoading } = useQuery({
    queryKey: ["data", user?.userId],
    queryFn: () => fetchAllData(amplifyClient, !isNil(user)),
  });
  if (isLoading) return <div>Chargement des données…</div>;

  const value = {
    isLoading,
    ...data,
  };
  return (
    <ContextLoader.Provider value={value}>{children}</ContextLoader.Provider>
  );
};
