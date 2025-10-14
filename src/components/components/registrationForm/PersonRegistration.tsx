import { Grid } from "@mui/material";
import { TextDetailEditable } from "../misc/TextDetailEdiable";

export interface PersonRegistrationProps {
  prefix: string;
}

export const PersonRegistration: React.FC<PersonRegistrationProps> = ({
  prefix,
}) => {
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"space-around"}
      flexDirection="column"
    >
      <TextDetailEditable label="Email" name={`${prefix}.email`} />
      <TextDetailEditable label="Call sign" name={`${prefix}.callSign`} />
      <TextDetailEditable label="Prénom" name={`${prefix}.firstName`} />
      <TextDetailEditable label="Nom" name={`${prefix}.lastName`} />
      <TextDetailEditable type="number" label="Âge" name={`${prefix}.age`} />
    </Grid>
  );
};
