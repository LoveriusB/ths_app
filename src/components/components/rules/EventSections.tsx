import { Grid } from "@mui/material";
import { useState } from "react";
import { BaseRules } from "./sections/eventSections/BaseRules";
import { CampingRules } from "./sections/eventSections/CampingRules";
import { ChronoRules } from "./sections/eventSections/ChronoRules";
import { InGameRules } from "./sections/eventSections/InGameRules";
import { PMARules } from "./sections/eventSections/PMARules";
import { VillageRules } from "./sections/eventSections/VillageRules";

export const EventSections = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <Grid container>
      <BaseRules expanded={expanded} setExpanded={setExpanded} />
      <InGameRules expanded={expanded} setExpanded={setExpanded} />
      <CampingRules expanded={expanded} setExpanded={setExpanded} />
      <ChronoRules expanded={expanded} setExpanded={setExpanded} />
      <PMARules expanded={expanded} setExpanded={setExpanded} />
      <VillageRules expanded={expanded} setExpanded={setExpanded} />
    </Grid>
  );
};
