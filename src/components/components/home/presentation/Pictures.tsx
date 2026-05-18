import {
  alpha,
  Box,
  Button,
  Card,
  CardActionArea,
  Container,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { list, getUrl } from "aws-amplify/storage";
import { ResponsiveDialog } from "../../misc/ResponsiveDialog";
import { useEffect, useState } from "react";

interface PicturesProps {
  picturesOpen?: boolean;
  onClose: (open: boolean) => void;
}

export type GalleryPhoto = {
  id: string;
  src: string;
  title: string;
};

export const Pictures: React.FC<PicturesProps> = ({ picturesOpen, onClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [laoding, setLoading] = useState(false);
  const [photos, setPhotos] = useState<GalleryPhoto[]>([]);

  useEffect(() => {
    let cancelled = false;

    const loadPhotos = async () => {
      try {
        setLoading(true);

        const result = await list({
          path: "pictures/",
          options: {
            listAll: true,
            subpathStrategy: { strategy: "exclude" },
          },
        });

        const imageItems = result.items.filter((item) => {
          return item.size && /\.(jpg|jpeg|png|webp|gif)$/i.test(item.path);
        });

        const photosWithUrls = await Promise.all(
          imageItems.map(async (item) => {
            const { url } = await getUrl({
              path: item.path,
            });

            return {
              id: item.path,
              src: url.toString(),
              title: item.path.split("/").pop() ?? "Photo",
            };
          }),
        );

        if (!cancelled) {
          setPhotos(photosWithUrls);
        }
      } catch (error) {
        console.error("Impossible de charger les photos S3", error);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadPhotos();

    return () => {
      cancelled = true;
    };
  }, []);

  console.log("Photos chargées :", photos, laoding);

  return (
    <ResponsiveDialog open={!!picturesOpen} onClose={() => onClose(false)}>
      <DialogTitle>Photos de l'édition 2023</DialogTitle>
      <DialogContent dividers>
        <Grid container padding={2} justifyContent={"center"} alignItems={"center"} flexDirection={"column"}>
          <Typography variant="caption">Elles seront disponibles après le tournoi !</Typography>
        </Grid>
        <Container>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: isMobile ? "1fr" : "1fr 1fr",
              },
              gridAutoRows: { xs: 200 },
              gap: { xs: 2, md: 2.5 },
            }}
          >
            {photos.map((photo, index) => {
              const isLarge = index === 0;
              return (
                <Card
                  key={photo.id}
                  elevation={0}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 5,
                    gridColumn: {
                      xs: "span 1",
                      sm: isLarge ? "span 2" : "span 1",
                    },
                    gridRow: { xs: isLarge ? "span 2" : "span 1" },
                    // border: `1px solid ${alpha(theme.palette.common.white, 0.8)}`,
                    boxShadow: `0 24px 80px ${alpha(theme.palette.common.black, 0.12)}`,
                    // bgcolor: "grey.200",
                    // isolation: "isolate",
                  }}
                >
                  <CardActionArea
                    sx={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      "&:hover img": {
                        transform: "scale(1.08)",
                      },
                      "&:hover .gallery-overlay": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={photo.src}
                      alt={photo.title}
                      loading="lazy"
                      sx={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 700ms ease",
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        opacity: { xs: 1, md: 0.92 },
                        transition: "opacity 250ms ease",
                        background: `linear-gradient(180deg, transparent 20%, ${alpha(
                          theme.palette.common.black,
                          0.82,
                        )} 100%)`,
                        zIndex: 1,
                      }}
                    />
                  </CardActionArea>
                </Card>
              );
            })}
          </Box>
        </Container>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={() => onClose(false)}>
          Fermer
        </Button>
      </DialogActions>
    </ResponsiveDialog>
  );
};
