import { Grid, MenuItem, Select, Typography } from "@mui/material";
import { MAX_PLAYERS } from "./RegisterDialog";
import { useRegistrationContext } from "../../../hooks/useRegistrationContext";

interface AmountOfPlayersProps {
  playersCount: number;
  onChangePlayers: (
    event:
      | React.ChangeEvent<Omit<HTMLInputElement, "value"> & { value: number }>
      | (Event & { target: { value: number; name: string } })
  ) => void;
}

export const AmountOfPlayers: React.FC<AmountOfPlayersProps> = ({
  onChangePlayers,
  playersCount,
}) => {
  const { registration } = useRegistrationContext();
  return (
    <Grid
      container
      spacing={2}
      justifyContent={"space-around"}
      alignItems={"center"}
      flexDirection="row"
      width={"100%"}
    >
      <Grid size={{ xs: 8, sm: 6, md: 6, lg: 6, xl: 6 }}>
        <Typography>Nombre de joueurs à inscrire:</Typography>
      </Grid>
      <Grid size={{ xs: 4, sm: 6, md: 6, lg: 6, xl: 6 }}>
        <Select
          value={playersCount}
          onChange={(event) => onChangePlayers(event)}
          fullWidth
        >
          {Array.from(
            { length: Math.min(MAX_PLAYERS - registration.length, 5) },
            (_, i) => i + 1
          ).map((value) => (
            <MenuItem key={value} value={value}>
              {`${value} joueur${value > 1 ? "s" : ""}`}
            </MenuItem>
          ))}
        </Select>
      </Grid>
    </Grid>
  );
};
