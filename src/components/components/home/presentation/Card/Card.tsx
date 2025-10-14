import { Divider, Grid, Paper, Typography } from "@mui/material";
import { CardList } from "./CardList";
import { TopIconnedTexts } from "./TopIconnedTexts";

export interface CardProps {
  title: string;
  topIconnedTexts: {
    icon: React.ReactNode;
    text: string;
    button?: boolean;
    href?: string;
  }[];
  cardListItems: {
    icon: React.ReactNode;
    texts: string[];
    actionButton?: React.ReactNode;
  }[];
}

export const Card: React.FC<CardProps> = ({
  title,
  topIconnedTexts,
  cardListItems,
}) => {
  return (
    <Grid size={{ xs: 11.5, sm: 11.5, md: 5.5, lg: 5.5, xl: 4 }}>
      <Paper variant="homePaper">
        <Typography variant="h6">{title}</Typography>
        <Divider />
        <TopIconnedTexts topIconnedTexts={topIconnedTexts} />
        <CardList cardListItems={cardListItems} />
      </Paper>
    </Grid>
  );
};
