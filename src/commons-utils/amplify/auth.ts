import { getCurrentUser, fetchAuthSession } from "aws-amplify/auth";

export const getAuthUser = async () => {
  try {
    // 1️⃣ Vérifie s’il y a un utilisateur localement
    const user = await getCurrentUser();
    return user;
  } catch {
    // 2️⃣ Sinon, tente de régénérer une session (refresh token)
    try {
      await fetchAuthSession();
      const user = await getCurrentUser();
      return user;
    } catch {
      // 3️⃣ Plus rien de valide → il faut se reconnecter
      return null;
    }
  }
};
