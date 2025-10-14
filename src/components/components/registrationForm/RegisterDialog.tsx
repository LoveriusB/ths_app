import {
  Button,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { isNilOrEmpty, yupToFormikErrors } from "../../../commons-utils";
import { Formik } from "formik";
import * as Yup from "yup";
import { LoaderButton } from "../buttons/LoaderButton";
import { RegistrationForm } from "./RegistrationForm";
import { useState } from "react";
import { recapSchema, validationSchema } from "./schema";
import { ResponsiveDialog } from "../misc/ResponsiveDialog";
import { useAmplify } from "../../../hooks/useAmplify";

export type FormValues = {
  team: string;
  playersCount: number;
  players: Array<{
    email: string;
    callSign: string;
    firstName: string;
    lastName: string;
    age: number;
  }>;
  authorizationFromOtherPlayers: boolean;
  valuesValidated: boolean;
  hasReadRules: boolean;
  hasReadPrivacy: boolean;
  hasReadPayback: boolean;
};

export const MAX_PLAYERS = 150;
export const RegisterDialog: React.FC<DialogProps> = ({ open, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);

  const client = useAmplify();
  const isSessionValid = (
    session: Awaited<ReturnType<typeof client.queries.makeStripePayment>>
  ): session is Awaited<ReturnType<typeof client.queries.makeStripePayment>> & {
    data: { id: string };
  } => {
    if (isNilOrEmpty(session.data) || isNilOrEmpty(session.data.id)) {
      console.error("Stripe session is not valid");
      return false;
    }
    return true;
  };

  const getStripe = async () => {
    const stripe = await loadStripe(
      "pk_live_51RiL9EP0903hIv6cj3JbqkTGKuYxc2rubnKE5tnG5SymwY4x0RhhaZB3vxOCD2LliMa1NjlzuOlw9xVS9m2WOY9t00vcJK4SDZ",
      {
        locale: "fr-FR",
      }
    );
    if (isNilOrEmpty(stripe)) {
      console.error("Error: Stripe.js failed to load.");
      return;
    }
    return stripe;
  };

  const startPaymentProcess = async (values: FormValues) => {
    const stripe = await getStripe();
    const session = await client.queries.makeStripePayment(values, {
      authMode: "identityPool",
    });
    if (!isSessionValid(session)) {
      console.log("Session", session);
      if (session.data?.error === "NotEnoughSpotsError") {
        console.log("Not enough spots available");
      }
      return;
    }
    stripe?.redirectToCheckout({
      sessionId: session.data.id,
    });
  };

  const initialValues: FormValues = {
    team: "",
    playersCount: 1,
    players: [
      {
        email: "",
        callSign: "",
        firstName: "",
        lastName: "",
        age: 18,
      },
    ],
    authorizationFromOtherPlayers: false,
    valuesValidated: false,
    hasReadRules: false,
    hasReadPrivacy: false,
    hasReadPayback: false,
  };

  return (
    <ResponsiveDialog
      open={open}
      onClose={(event) => {
        onClose && onClose(event, "backdropClick");
        setActiveStep(0);
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values, { setSubmitting, setErrors }) => {
          if (activeStep === values.playersCount) {
            // Last step, submit the form
            try {
              await validationSchema.concat(recapSchema).validate(values, {
                abortEarly: false,
              });
              setErrors({});
            } catch (e) {
              if (e instanceof Yup.ValidationError) {
                setErrors(yupToFormikErrors(e));
                return;
              }
            }
            setSubmitting(true);
            await startPaymentProcess(values);
            setSubmitting(false);
          }
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validateOnMount={false}
        validateOnSubmit={false}
      >
        {({ isSubmitting, values, submitForm, setErrors }) => {
          const isLastPlayerStep = activeStep === values.playersCount - 1;
          const isLastStep = activeStep === values.playersCount;

          const onClickNext = async () => {
            if (isLastPlayerStep) {
              try {
                await validationSchema.validate(values, {
                  abortEarly: false,
                });
                setErrors({});
              } catch (e) {
                if (e instanceof Yup.ValidationError) {
                  setErrors(yupToFormikErrors(e));
                  return;
                }
              }
            }
            if (!isLastStep) {
              setActiveStep((prev) =>
                Math.min(prev + 1, values.players.length)
              );
            } else {
              submitForm();
            }
          };

          return (
            <>
              <DialogTitle>Inscription</DialogTitle>
              <DialogContent dividers>
                <RegistrationForm
                  activeStep={activeStep}
                  setActiveStep={setActiveStep}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  variant="outlined"
                  onClick={(event) => {
                    onClose && onClose(event, "backdropClick");
                    setActiveStep(0);
                  }}
                >
                  Annuler
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    if (activeStep > 0) setActiveStep((prev) => prev - 1);
                  }}
                >
                  Précédent
                </Button>
                <LoaderButton
                  variant="contained"
                  onClick={async () => await onClickNext()}
                  isLoading={isSubmitting}
                  label={isLastStep ? "Valider" : "Suivant"}
                />
              </DialogActions>
            </>
          );
        }}
      </Formik>
    </ResponsiveDialog>
  );
};
