import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Rnd, RndResizeCallback } from "react-rnd";
import {
  fromPixelsToNumber,
  IWindowsContext,
  WindowItem,
} from "../../../../../commons-utils";
import { useDraggable } from "../../../../../hooks/useDraggable";
import { Frame } from "./Frame";

export const Window: React.FC<WindowItem & {
  windowsContext: IWindowsContext;
}> = (item) => {
  const [loaded, setLoaded] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(0);
  const { closeWindow } = item.windowsContext;
  const { onMouseDown, data, setData } = useDraggable(
    item.position,
    item.initialSize
  );

  useEffect(() => {
    const img = new Image();
    img.src = item.url.toString();

    img.onload = () => {
      setAspectRatio(img.naturalHeight / img.naturalWidth);
      setLoaded(true);
    };
  }, [item.url]);

  const adaptPosition = (): { x: number; y: number } | undefined => ({
    x: data.position.x,
    y: data.position.y,
  });

  const onResizeStop: RndResizeCallback = (
    _event,
    _direction,
    _ref,
    _delta,
    position
  ) =>
    setData((previousData) => {
      return {
        ...previousData,
        position: {
          x: position.x,
          y: position.y,
        },
        size: {
          width: fromPixelsToNumber(_ref.style.width),
          height: fromPixelsToNumber(_ref.style.height),
        },
      };
    });

  return (
    <Rnd
      disableDragging
      lockAspectRatio
      enableResizing
      onResize={onResizeStop}
      position={adaptPosition()}
      minWidth={item.minSize.height / (aspectRatio ?? 1)}
      minHeight={item.minSize.height}
      default={{
        x: 200,
        y: 200,
        width: data.size.height / (aspectRatio ?? 1),
        height: data.size.height,
      }}
    >
      <Paper variant="window" elevation={24}>
        <Paper variant="windowBar" onMouseDown={onMouseDown}>
          <Typography>{item.title}</Typography>
          <IconButton
            style={{ width: "24px", height: "24px" }}
            onClick={() => closeWindow(item.id)}
          >
            <CloseIcon />
          </IconButton>
        </Paper>
        {!loaded ? (
          <p>Chargement...</p>
        ) : (
          <Frame type={item.type} url={item.url} height={data.size.height} />
        )}
      </Paper>
    </Rnd>
  );
};
