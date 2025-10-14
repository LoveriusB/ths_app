import { Step, StepLabel, Stepper } from "@mui/material";
import { FormikErrors } from "formik";
import { Schema } from "../../../../amplify/backend";
import { isNilOrEmpty } from "../../../commons-utils";
import { FormValues } from "./RegisterDialog";

export interface RegistrationStepperProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  values: Schema["player"]["type"][];
  errors: FormikErrors<FormValues>;
}

export const RegistrationStepper: React.FC<RegistrationStepperProps> = ({
  activeStep,
  errors,
  setActiveStep,
  values,
}) => {
  return (
    <Stepper activeStep={activeStep} alternativeLabel>
      {values.map((label, index) => (
        <Step
          key={index}
          onClick={() => {
            if (index >= activeStep) return;
            setActiveStep(index);
          }}
        >
          <StepLabel error={!isNilOrEmpty(errors.players?.[index])}>
            {!isNilOrEmpty(label.callSign)
              ? label.callSign
              : `Joueur ${index + 1}`}
          </StepLabel>
        </Step>
      ))}
      <Step>
        <StepLabel>Récap</StepLabel>
      </Step>
    </Stepper>
  );
};
