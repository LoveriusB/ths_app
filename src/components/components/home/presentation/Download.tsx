import { getUrl } from "aws-amplify/storage";
import { IconButton } from "@mui/material";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export const DownloadPicturesZipButton = () => {
  const handleDownloadZip = async () => {
    try {
      const { url } = await getUrl({
        path: "downloads/Photos opex.zip",
        options: {
          validateObjectExistence: true,
        },
      });

      const link = document.createElement("a");
      link.href = url.toString();
      link.download = "photos.zip";
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Impossible de récupérer le ZIP photos", error);
    }
  };

  return (
    <IconButton onClick={handleDownloadZip}>
      <DownloadRoundedIcon />
    </IconButton>
  );
};
