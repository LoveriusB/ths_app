import { Grid } from "@mui/material";
import { IconnedText } from "../../../misc/IconnedText";

interface ITopIconnedTexts {
  topIconnedTexts: {
    icon: React.ReactNode;
    text: string;
    button?: boolean;
    href?: string;
  }[];
}

export const TopIconnedTexts: React.FC<ITopIconnedTexts> = ({
  topIconnedTexts,
}) => {
  return (
    <Grid container spacing={2} style={{ margin: "16px 0px" }}>
      {topIconnedTexts.map((item) => {
        return (
          <Grid size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} key={item.text}>
            <IconnedText
              icon={item.icon}
              text={item.text}
              button={item.button}
              href={item.href}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};
