import {
  Box,
  Dialog,
  DialogProps,
  useMediaQuery,
  useTheme,
} from "@mui/material";

interface ResponsiveDialogProps extends Omit<DialogProps, "fullScreen"> {
  lateralColor?: "error" | "info" | "warning";
}

export const ResponsiveDialog: React.FC<ResponsiveDialogProps> = ({
  children,
  lateralColor,
  ...dialogProps
}) => {
  const theme = useTheme();
  const isSmOrLess = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Dialog fullScreen={isSmOrLess} {...dialogProps}>
      {lateralColor && (
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 8,
            bgcolor: (t) => t.palette[lateralColor].main,
            opacity: 0.9,
          }}
        />
      )}
      {children}
    </Dialog>
  );
};
