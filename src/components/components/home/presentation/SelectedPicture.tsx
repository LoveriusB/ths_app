import { Box, DialogContent, DialogTitle, IconButton } from "@mui/material";
import { ResponsiveDialog } from "../../misc/ResponsiveDialog";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { GalleryPhoto } from "./Pictures";

interface SelectedPictureProps {
  selectedPhoto: GalleryPhoto | null;
  photos: GalleryPhoto[];
  goToPreviousPhoto: () => void;
  goToNextPhoto: () => void;
  closeDialog: () => void;
}

export const SelectedPicture: React.FC<SelectedPictureProps> = ({
  closeDialog,
  goToNextPhoto,
  goToPreviousPhoto,
  photos,
  selectedPhoto,
}) => {
  return (
    <ResponsiveDialog
      open={!!selectedPhoto}
      onClose={closeDialog}
      fullWidth
      maxWidth="lg"
      PaperProps={{
        sx: {
          borderRadius: 4,
          overflow: "hidden",
          bgcolor: "background.paper",
        },
      }}
    >
      <DialogTitle
        sx={{
          pr: 7,
          fontWeight: 800,
        }}
      >
        Op THS 2026 - Photo
        <IconButton
          onClick={closeDialog}
          aria-label="Fermer"
          sx={{
            position: "absolute",
            right: 12,
            top: 10,
          }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent
        sx={{
          p: 0,
          position: "relative",
          bgcolor: "black",
        }}
      >
        {photos.length > 1 && (
          <IconButton
            onClick={goToPreviousPhoto}
            aria-label="Photo précédente"
            sx={{
              position: "absolute",
              left: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.45)",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.65)",
              },
            }}
          >
            <ChevronLeftRoundedIcon fontSize="large" />
          </IconButton>
        )}

        <Box
          component="img"
          src={selectedPhoto?.src}
          alt={selectedPhoto?.id}
          sx={{
            width: "100%",
            height: {
              xs: "70vh",
              md: "80vh",
            },
            objectFit: "contain",
            display: "block",
            bgcolor: "black",
          }}
        />

        {photos.length > 1 && (
          <IconButton
            onClick={goToNextPhoto}
            aria-label="Photo suivante"
            sx={{
              position: "absolute",
              right: { xs: 8, md: 16 },
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 2,
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.45)",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.65)",
              },
            }}
          >
            <ChevronRightRoundedIcon fontSize="large" />
          </IconButton>
        )}
      </DialogContent>
    </ResponsiveDialog>
  );
};
