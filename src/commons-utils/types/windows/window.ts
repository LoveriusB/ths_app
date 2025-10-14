export interface DraggableWindowProps {
  onMouseDown?: () => void;
}

export interface MinimalSize {
  width: number;
  height: number;
}

export interface FrameProps {
  url: string;
  type: "video" | "audio" | "image";
}

export interface WindowItem
  extends DraggableWindowProps,
    WindowMetaData,
    WindowState,
    WindowContent {}

export interface WindowMetaData {
  id: string;
  title: string;
}

export interface WindowState extends WindowStateSize, WindowStatePosition {
  isWindowFocused: boolean;
  isMinimized?: boolean;
  isMaximized?: boolean;
  isHidden: boolean;
}

export interface WindowStateSize {
  minSize: MinimalSize;
  initialSize: Size;
}

export interface WindowStatePosition {
  position: Position;
}

export interface WindowContent {
  url: URL;
  type: "video" | "audio" | "image";
}

export interface Position {
  x: number;
  y: number;
}

export interface Size {
  width: number;
  height: number;
}
