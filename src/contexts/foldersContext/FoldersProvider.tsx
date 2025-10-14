import { Grid, Typography } from "@mui/material";
import { isEqual } from "lodash";
import { ReactNode, useState } from "react";
import { Folder, rootFolder } from "../../commons-utils";
import { FoldersContext } from "./FoldersContext";

export const FoldersContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [currentAriane, setCurrentAriane] = useState<Folder[]>([rootFolder]);

  const openNewFolder = (folderName: string) => {
    const currentFolder = currentAriane[currentAriane.length - 1];
    if (folderName === ".." && !isEqual(currentFolder, rootFolder)) {
      currentAriane.pop();
      setCurrentAriane([...currentAriane]);
    }
    const childFolder = currentFolder?.children?.find(
      (folder) => folder.name === folderName
    );

    if (childFolder) {
      setCurrentAriane([...currentAriane, childFolder]);
    }
  };

  const getPromptSnapshot = (): React.ReactNode => (
    <Grid component="div" sx={{ display: "flex", alignItems: "center" }}>
      <Typography component="span" sx={{ color: "#55f" }}>
        Copy1216
      </Typography>
      <Typography component="span">@</Typography>
      <Typography component="span" sx={{ color: "#5f5" }}>
        ths-machine
      </Typography>
      <Typography component="span">:</Typography>
      <Typography component="span" sx={{ color: "#fff" }}>
        {currentAriane.map((folder) => folder.name).join("/") || "~"}
      </Typography>
      <Typography component="span">$</Typography>
    </Grid>
  );

  const value = {
    currentAriane,
    openNewFolder,
    getPromptSnapshot,
  };
  return (
    <FoldersContext.Provider value={value}>{children}</FoldersContext.Provider>
  );
};
