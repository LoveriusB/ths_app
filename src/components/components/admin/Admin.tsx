import { useUser } from "../../../hooks/useUser";
import { AuthAdmin } from "./AuthAdmin";
import { UnAuthAdmin } from "./UnAuthAdmin";

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
