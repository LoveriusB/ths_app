import { Button, ButtonProps, CircularProgress } from "@mui/material";

export interface LoaderButtonProps extends ButtonProps {
  isLoading: boolean;
  label: string;
}

export const LoaderButton: React.FC<LoaderButtonProps> = ({
  isLoading,
  label,
  ...other
}) => {
  return (
    <Button disabled={isLoading} {...other}>
      {isLoading ? <CircularProgress size={"24px"} /> : label}
    </Button>
  );
};
