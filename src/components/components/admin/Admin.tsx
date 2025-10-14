import { UnAuthAdmin } from "./UnAuthAdmin";
import { AuthAdmin } from "./AuthAdmin";
import { useUser } from "../../../hooks/useUser";

export interface AdminProps {
  [key: string]: string;
}

export const Admin: React.FC<AdminProps> = () => {
  const { user } = useUser();

  if (!user) {
    return <UnAuthAdmin />;
  }

  return <AuthAdmin />;
};
