import * as Yup from "yup";

// q: crée un regex qui respecte ces règles de mdp stp: Longueur minimale du mot de passe: 8 caractère(s), Contient au moins 1 chiffre, Contient au moins 1 caractère spécial, Contient au moins 1 majuscule, Contient au moins 1 minuscule,

const passwordRegex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/;
export const changePasswordFormSchema = Yup.object().shape({
  newPassword: Yup.string()
    .min(6, "Trop court!")
    .required("Ce champ est requis.")
    .matches(passwordRegex, "Le mot de passe ne respecte pas les exigences."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword")], "Les mots de passe doivent correspondre.")
    .required("Ce champ est requis."),
});
