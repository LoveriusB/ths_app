import { getCurrentUser, fetchAuthSession } from 'aws-amplify/auth';

export const getAuthUser = async () => {
  try {
    // 1️⃣ Vérifie s’il y a un utilisateur localement
    const user = await getCurrentUser();
    console.log('Utilisateur encore valide :', user.username);
    const { tokens } = await fetchAuthSession();
    console.log('id token :', tokens?.idToken?.toString());
    return user;
  } catch {
    // 2️⃣ Sinon, tente de régénérer une session (refresh token)
    try {
      const { tokens } = await fetchAuthSession();
      console.log('Session rafraîchie :', tokens?.accessToken);
      const user = await getCurrentUser();
      return user;
    } catch {
      // 3️⃣ Plus rien de valide → il faut se reconnecter
      console.log('Session expirée, reconnexion requise');
      return null;
    }
  }
};
