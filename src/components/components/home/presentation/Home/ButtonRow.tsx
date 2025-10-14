import { Button, Grid, useMediaQuery, useTheme } from "@mui/material";
import { useRegistrationContext } from "../../../../../hooks/useRegistrationContext";

interface HomeButtonRowProps {
  setRegisterOpen: (open: boolean) => void;
  setSocialNetworkOpen: (open: boolean) => void;
}

export const HomeButtonRow: React.FC<HomeButtonRowProps> = ({
  setRegisterOpen,
  setSocialNetworkOpen,
}) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const {
    registration,
    getAmountOfOrgaRegistration,
  } = useRegistrationContext();

  return (
    <Grid container size={{ xs: 11.5 }} spacing={2}>
      <Grid size={{ xs: 6 }} container justifyContent="flex-end">
        <Button
          onClick={() => setRegisterOpen(true)}
          variant="contained"
          size="large"
          fullWidth={isXs}
          disabled={registration.length - getAmountOfOrgaRegistration() >= 150}
        >
          Inscriptions : {registration.length - getAmountOfOrgaRegistration()} /
          150
        </Button>
      </Grid>
      <Grid size={{ xs: 6 }} height={"100%"} container alignContent={"center"}>
        <Button
          onClick={() => setSocialNetworkOpen(true)}
          variant="contained"
          size="large"
          {...(!isXs ? { sx: { minWidth: 285 } } : {})}
          fullWidth={isXs}
        >
          Nos réseaux
        </Button>
      </Grid>
    </Grid>
  );
};
