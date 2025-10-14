import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { isNil } from "lodash";

export interface SectionControlProps {
  expanded?: string | null;
  setExpanded?: (id: string | null) => void;
}

interface SectionProps extends SectionControlProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  id,
  title,
  icon,
  children,
  expanded,
  setExpanded,
}) => (
  <Accordion
    disableGutters
    {...(!isNil(setExpanded)
      ? {
          onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
            setExpanded(event.currentTarget.id === expanded ? null : id),
        }
      : {})}
    {...(!isNil(setExpanded)
      ? { expanded: expanded === id }
      : { expanded: false })}
    id={id}
  >
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${id}-content`}
      id={`${id}-header`}
    >
      <Grid
        container
        direction="row"
        spacing={1}
        alignItems="center"
        width={"100%"}
      >
        <Grid container justifyContent={"center"} size={{ xs: 2 }}>
          {icon}
        </Grid>
        <Grid size={{ xs: 10 }}>
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
        </Grid>
      </Grid>
    </AccordionSummary>
    <AccordionDetails>
      <Grid padding={2}>
        <Stack spacing={1.5}>{children}</Stack>
      </Grid>
    </AccordionDetails>
  </Accordion>
);
