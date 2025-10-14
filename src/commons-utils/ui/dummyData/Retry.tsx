import { Typography } from "@mui/material";

export interface retryProps {
  message: string;
}

export const Retry: React.FC<retryProps> = ({ message }) => {
  return (
    <Typography>
      <span style={{ color: "#CC00CC" }}>[RETRY]</span>: {message}
    </Typography>
  );
};
