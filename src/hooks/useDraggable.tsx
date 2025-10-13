import { Position, Size } from "../commons-utils";
import { useCallback, useEffect, useState } from "react";

interface DraggableData {
  isDragging: boolean;
  position: Position;
  size: Size;
}

export const useDraggable = (position: Position, initialSize: Size) => {
  const [data, setData] = useState<DraggableData>({
    isDragging: false,
    position: position,
    size: initialSize,
  });
  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (data.isDragging) {
        setData((prevState) => {
          return {
            ...prevState,
            position: {
              x: prevState.position.x + e.movementX,
              y: prevState.position.y + e.movementY,
            },
          };
        });
      }
    },
    [data.isDragging]
  );

  const onMouseDown = useCallback(() => {
    setData((prevState) => ({
      ...prevState,
      isDragging: true,
    }));
  }, []);

  const onMouseUp = useCallback(() => {
    if (data.isDragging) {
      setData((prevState) => ({
        ...prevState,
        isDragging: false,
      }));
    }
  }, [data.isDragging]);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [onMouseMove, onMouseUp]);

  return {
    onMouseDown,
    data,
    setData,
  };
};
