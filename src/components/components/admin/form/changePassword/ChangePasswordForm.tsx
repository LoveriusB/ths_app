import { Typography, Divider } from "@mui/material";
import { Form, Formik } from "formik";
import { LoaderButton } from "../../../buttons/LoaderButton";
import { ChangePasswordFormContent } from "./ChangePasswordFormContent";
import { changePasswordFormSchema } from "./changePasswordFormSchema";
import { useUser } from "../../../../../hooks/useUser";
interface ChangePasswordProps {
  setFormState: (state: "signIn" | "changePassword") => void;
}

interface ChangePasswordFormValues {
  newPassword: string;
  confirmPassword: string;
}

const initialValues: ChangePasswordFormValues = {
  newPassword: "",
  confirmPassword: "",
};

export const ChangePassword: React.FC<ChangePasswordProps> = ({
  setFormState,
}) => {
  const { adminConfirmSignIn: AdminConfirmSignIn } = useUser();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values: ChangePasswordFormValues) => {
        await AdminConfirmSignIn({
          challengeResponse: values.newPassword,
        });
        setFormState("signIn");
      }}
      validationSchema={changePasswordFormSchema}
    >
      {({ isSubmitting }) => {
        return (
          <Form>
            <Typography variant="h4">Admin Change Password</Typography>
            <Divider />
            <ChangePasswordFormContent />
            <Divider />
            <LoaderButton
              isLoading={isSubmitting}
              label="Connexion"
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
            />
          </Form>
        );
      }}
    </Formik>
  );
};
