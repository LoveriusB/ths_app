import { Divider, Typography } from "@mui/material";
import { Form, Formik } from "formik";
import React from "react";
import { useUser } from "../../../../../hooks/useUser";
import { LoaderButton } from "../../../buttons/LoaderButton";
import { SignInFormContent } from "./SignInFormContent";

interface SignInFormValues {
  email: string;
  password: string;
}

const initialValues = {
  email: "",
  password: "",
};

interface SignInFormProps {
  setFormState: (state: "signIn" | "changePassword") => void;
}

export const SignInForm: React.FC<SignInFormProps> = ({ setFormState }) => {
  const { adminSignIn: AdminSignIn } = useUser();
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={async (values: SignInFormValues) => {
        const result = await AdminSignIn({
          username: values.email,
          password: values.password,
        });
        if (
          !result.isSignedIn &&
          result?.nextStep.signInStep ===
            "CONFIRM_SIGN_IN_WITH_NEW_PASSWORD_REQUIRED"
        ) {
          setFormState("changePassword");
        }
        window.location.reload();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Typography variant="h4">Admin Sign In</Typography>
          <Divider />
          <SignInFormContent />
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
      )}
    </Formik>
  );
};
