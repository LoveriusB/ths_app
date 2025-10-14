import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";

type Rule = { text: string; type?: "ok" | "ban" | "warn" };

export const RuleList = ({ items }: { items: Rule[] }) => (
  <List>
    {items.map((r, idx) => (
      <ListItem key={idx} disableGutters>
        <ListItemIcon>
          {r.type === "ban" ? (
            <Tooltip title="Interdit / strict">
              <DoNotDisturbOnIcon />
            </Tooltip>
          ) : r.type === "warn" ? (
            <Tooltip title="Attention / prudence">
              <WarningAmberIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Obligatoire / recommandé">
              <CheckCircleOutlineIcon />
            </Tooltip>
          )}
        </ListItemIcon>
        <ListItemText
          slotProps={{ primary: { variant: "body1" } }}
          primary={r.text}
        />
      </ListItem>
    ))}
  </List>
);
