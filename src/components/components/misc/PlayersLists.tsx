import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Grid,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { groupBy, chunk, capitalize } from "lodash";
import { useState } from "react";
import { Schema } from "../../../../amplify/backend";
import { useRegistrationContext } from "../../../hooks/useRegistrationContext";

export interface PlayersListsProps {
  margin?: number;
}

export const PlayersLists: React.FC<PlayersListsProps> = ({ margin }) => {
  const { registration } = useRegistrationContext();
  const [expanded, setExpanded] = useState<{
    grindIdex?: number;
    team?: string;
  }>({});
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const isSmall = useMediaQuery(theme.breakpoints.only("sm"));
  const isMd = useMediaQuery(theme.breakpoints.only("md"));

  const registrationByTeam = groupBy(registration, "team");
  const registrationByTeamChunked = Object.keys(registrationByTeam).reduce(
    (acc, team) => {
      const chunkedMembers = chunk(
        registrationByTeam[team],
        2 // 2 players per line or 3 on large screens
      );
      acc[team] = chunkedMembers;
      return acc;
    },
    {} as { [key: string]: typeof registration[] } // specify the type of the accumulator
  );

  const chunk1: { [key: string]: typeof registration[] } = {};
  const chunk2: { [key: string]: typeof registration[] } = {};
  const chunk3: { [key: string]: typeof registration[] } = {};
  const chunk4: { [key: string]: typeof registration[] } = {};
  const amountOfGrids = isXs ? 1 : isSmall ? 2 : isMd ? 3 : 4;

  Object.keys(registrationByTeamChunked).forEach((team, index) => {
    if (index % amountOfGrids === 0) {
      chunk1[team] = registrationByTeamChunked[team];
    } else if (index % amountOfGrids === 1) {
      chunk2[team] = registrationByTeamChunked[team];
    } else if (index % amountOfGrids === 2) {
      chunk3[team] = registrationByTeamChunked[team];
    } else {
      chunk4[team] = registrationByTeamChunked[team];
    }
  });

  const list = [chunk1, chunk2, chunk3, chunk4];

  return (
    <Grid
      size={{ xs: 11.5, sm: 11.5, md: 11, lg: 11, xl: 8 }}
      sx={{ margin: margin ?? "auto", mb: 4 }}
    >
      <Paper variant="playerList">
        <Typography gutterBottom variant="h2">
          Liste des équipes inscrites avec leurs membres :
        </Typography>
        <Divider />
        <Grid container justifyContent={"center"} spacing={2}>
          {Array.from({ length: amountOfGrids }).map((_, gridIndex) => (
            <Grid
              size={{
                xs: 12 / amountOfGrids - 0.5,
                sm: 12 / amountOfGrids - 0.5,
                md: 12 / amountOfGrids,
              }}
              key={gridIndex}
            >
              {Object.keys(list[gridIndex]).map((team) => {
                return (
                  <Accordion
                    key={list[gridIndex][team][0][0].id}
                    disableGutters
                    expanded={
                      expanded.grindIdex === gridIndex && expanded.team === team
                    }
                    onChange={() =>
                      setExpanded((prev) =>
                        prev.grindIdex === gridIndex && prev.team === team
                          ? {}
                          : {
                              grindIdex: gridIndex,
                              team: team,
                            }
                      )
                    }
                  >
                    <AccordionSummary>
                      <Typography>{team}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Table>
                        <TableBody>
                          {list[gridIndex][team].map(
                            (
                              players: Schema["registration"]["type"][],
                              playerIndex
                            ) => {
                              const isLastRow =
                                playerIndex ===
                                list[gridIndex][team].length - 1;

                              return (
                                <TableRow key={players[0].id}>
                                  {players.map((player) => (
                                    <TableCell
                                      key={player.id}
                                      sx={
                                        isLastRow
                                          ? { borderBottom: "none" }
                                          : {}
                                      }
                                    >
                                      <ListItemText
                                        primary={capitalize(player?.callSign)}
                                      />
                                    </TableCell>
                                  ))}
                                </TableRow>
                              );
                            }
                          )}
                        </TableBody>
                      </Table>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Grid>
  );
};
