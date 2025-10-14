import { Typography } from "@mui/material";

export interface doneProps {
  message: string;
}

export const Done: React.FC<doneProps> = ({ message }) => {
  return (
    <Typography>
      <span style={{ color: "#66CC66" }}>[DONE]</span>: {message}
    </Typography>
  );
};
