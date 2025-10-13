export interface Folder {
  name: string; // Name of the folder
  children?: Folder[]; // Optional array of child folders
}

export interface FoldersContextInterface {
  /**
   * The actual folder of the terminal
   */
  currentAriane: Folder[];

  /**
   *
   * @param folder the new folder to set as current
   * @returns void.
   */
  openNewFolder: (folder: string) => void;

  /**
   *
   * @returns the snapshot of the prompt
   */
  getPromptSnapshot: () => React.ReactNode;
}
