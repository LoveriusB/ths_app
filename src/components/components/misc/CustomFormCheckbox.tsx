import { FormControlLabel, Grid, Typography } from '@mui/material';
import { CustomizedCheckBox } from './CustomizedCheckBox';
import { useFormikContext } from 'formik';
import { FormValues } from '../registrationForm/RegisterDialog';

interface CustomFormCheckBoxProps {
  name:
    | 'valuesValidated'
    | 'hasReadRules'
    | 'hasReadPrivacy'
    | 'hasReadPayback'
    | 'authorizationFromOtherPlayers';

  text: string;
  button: React.ReactNode;
}

export const CustomFormCheckBox: React.FC<CustomFormCheckBoxProps> = ({
  name,
  text,
  button,
}) => {
  const { errors } = useFormikContext<FormValues>();
  return (
    <FormControlLabel
      control={<CustomizedCheckBox name={name} />}
      label={
        <Grid width={'100%'}>
          <Typography
            component={'p'}
            variant="checkbox"
            color={errors[name] ? 'error' : 'textSecondary'}
            gutterBottom
          >
            {text}
          </Typography>
          {button}
        </Grid>
      }
    />
  );
};
