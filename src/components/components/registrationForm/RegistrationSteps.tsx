import { Grid } from '@mui/material';
import { PersonRegistration } from './PersonRegistration';
import { PlayersRecap } from './PlayersRecap';
import { FormValues } from './RegisterDialog';

interface RegistrationStepProps {
  activeStep: number;
  values: FormValues;
}

export const RegistrationSteps: React.FC<RegistrationStepProps> = ({
  activeStep,
  values,
}) => {
  return (
    <Grid container spacing={2} flexDirection="column" flex={1}>
      {values.players.map((_, index) => {
        if (index === activeStep) {
          return (
            <Grid key={index}>
              <PersonRegistration prefix={`players[${index}]`} />
            </Grid>
          );
        }
        return null;
      })}
      {activeStep === values.players.length && <PlayersRecap values={values} />}
    </Grid>
  );
};
