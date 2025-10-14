import SpeedIcon from "@mui/icons-material/SpeedOutlined";
import { Alert, Grid, Typography } from "@mui/material";
import { RuleList } from "../../../misc/Rule";
import { Section, SectionControlProps } from "../../../misc/Section";
import { RulesButton } from "../../RulesButton";

export const ChronoRules: React.FC<SectionControlProps> = ({
  expanded,
  setExpanded,
}) => {
  return (
    <Section
      id="chrony"
      title="Chrony et puissance de jeu"
      icon={<SpeedIcon />}
      expanded={expanded}
      setExpanded={setExpanded}
    >
      <Typography>
        Toutes les répliques doivent être testées à la zone dédiée{" "}
        <strong>avant</strong> le début de l'OP. Des passages au chrony peuvent
        avoir lieu durant l'évènement selon la disponibilité de l'organisateur.
      </Typography>
      <RuleList
        items={[
          {
            text: "Passage au chrony à la bille de jeu : HPA & Sniper",
            type: "ok",
          },
          {
            text: "Passage au chrony à la bille 0,20 g : AEG/GBBR",
            type: "ok",
          },
          {
            text: "Au-delà de 1,99 joule : réplique interdite",
            type: "ban",
          },
          {
            text:
              "HPA : systèmes de réglage d'air sécurisables par l'organisateur",
            type: "ok",
          },
          {
            text:
              "Seuls les chronys de l'organisation font foi — aucune tolérance",
            type: "warn",
          },
        ]}
      />
      <Alert severity="warning">
        Nous vous invitons à prendre connaissance des règles concernant les
        puissances.
        <Grid paddingTop={2}>
          <RulesButton fullWidth color="warning" />
        </Grid>
      </Alert>
    </Section>
  );
};
