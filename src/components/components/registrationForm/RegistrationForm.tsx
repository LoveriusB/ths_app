import { Grid } from "@mui/material";
import { useFormikContext } from "formik";
import { FormValues } from "./RegisterDialog";
import { ChangeEvent } from "react";
import { RegistrationStepper } from "./RegistrationStepper";
import { RegistrationSteps } from "./RegistrationSteps";
import { AmountOfPlayers } from "./AmountOfPlayers";
import { TextDetailEditable } from "../misc/TextDetailEdiable";

export interface RegistrationFormProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  activeStep,
  setActiveStep,
}) => {
  const { values, setValues, errors, setErrors } = useFormikContext<
    FormValues
  >();

  const onChangePlayers = (
    event:
      | ChangeEvent<Omit<HTMLInputElement, "value"> & { value: number }>
      | (Event & { target: { value: number; name: string } })
  ) => {
    setValues((prevValues) => {
      const amount = Math.max(1, Math.min(6, Number(event.target.value)));
      const previousAmount = prevValues.playersCount;
      const difference = amount - previousAmount;

      if (difference > 0) {
        // We added some players
        return {
          ...prevValues,
          playersCount: amount,
          players: [
            ...prevValues.players,
            ...Array.from({ length: difference }, () => ({
              email: "",
              callSign: "",
              firstName: "",
              lastName: "",
              age: 18,
            })),
          ],
        };
      }
      setActiveStep(Math.max(0, Math.min(amount - 1, activeStep)));
      setErrors({}); // Clear errors when reducing players
      return {
        ...prevValues,
        playersCount: amount,
        players: prevValues.players.slice(0, amount),
      };
    });
  };

  return (
    <Grid
      container
      spacing={2}
      flexDirection="column"
      minHeight={"100%"}
      justifyContent={"center"}
    >
      {activeStep !== values.playersCount && (
        <>
          <AmountOfPlayers
            onChangePlayers={onChangePlayers}
            playersCount={values.playersCount}
          />
          <TextDetailEditable label="Team" name={`team`} />
        </>
      )}
      <Grid
        container
        flex={1}
        justifyContent={"space-around"}
        flexDirection="column"
      >
        <RegistrationSteps activeStep={activeStep} values={values} />
        <RegistrationStepper
          activeStep={activeStep}
          errors={errors}
          setActiveStep={setActiveStep}
          values={values.players}
        />
      </Grid>
    </Grid>
  );
};
