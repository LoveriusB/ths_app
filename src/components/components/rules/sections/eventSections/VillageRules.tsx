import SecurityIcon from "@mui/icons-material/SecurityOutlined";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { Section, SectionControlProps } from "../../../misc/Section";

export const VillageRules: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="village"
      title="Village THS"
      icon={<SecurityIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Sanitaires
              </Typography>
              <Typography variant="body1">
                Des sanitaires sont à disposition au village THS, avec un
                nettoyage régulier.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Déchets
              </Typography>
              <Typography variant="body1">
                Le tri est obligatoire. Des poubelles et une signalétique claire
                sont en place. Pas de bouteilles en verre autorisées.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Eau / Ravitaillement
              </Typography>
              <Typography variant="body1">
                De l'eau propre non potable est disponible au village THS, en
                plus du pack accueil et de 2 L d'eau par jour et par joueur
                distribués au petit-déjeuner.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Feux
              </Typography>
              <Typography variant="body1">
                Feux autorisés uniquement dans les zones prévues à cet effet.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="subtitle2" color="textSecondary">
                Activités
              </Typography>
              <Typography variant="body1">
                Des activités et concours auront lieu pendant toute la durée de
                l'évènement avec des récompenses pour les gagnants.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Section>
  );
};
