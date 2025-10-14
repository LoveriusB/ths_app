import * as Yup from 'yup';

export const adminFormSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email n'est pas valide.")
    .required('Ce champ est requis.'),
  password: Yup.string().min(6, 'Trop court!').required('Ce champ est requis.'),
});
