import { Paper } from "@mui/material";
import { WindowContent } from "../../../../../commons-utils";

export const Frame: React.FC<WindowContent & { height: number }> = ({
  type,
  url,
  height = 400, // Default height if not provided
}) => {
  console.log(type);
  return (
    <Paper variant="windowContent">
      <img
        src={url.toString()}
        alt={"selected picture."}
        style={{
          borderRadius: "0 0 6px 6px",
          height,
        }}
      />
    </Paper>
  );
};
