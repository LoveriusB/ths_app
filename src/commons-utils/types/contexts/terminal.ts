import { JSX, ReactNode } from 'react';
import { FoldersContextInterface } from './folders';
import { WindowItem } from '../windows/window';

export interface TerminalInputsContextInterface {
  inputsHistory: ICommandHistory[];
  loading: boolean;
}

export interface TerminalInputsContextProviderInterface
  extends TerminalInputsContextInterface {
  /**
   * Reference to the input element for focusing and clearing.
   * The context needs this to manage the input field in the terminal.
   */
  textFieldRef: React.RefObject<HTMLInputElement | null>;

  /**
   * The current input in the terminal.
   * This is used to keep track of what the user is typing.
   */
  currentInput: string;

  /**
   * Adds a message to the command history.
   * This is used to display messages in the terminal.
   * @param message The message to add to the history.
   */
  addMessageToBuffer: (message: JSX.Element[]) => void;

  /**
   * Sets the current input in the terminal.
   * This function is used to update the input field in the context.
   * @param input The new input value to set.
   */
  setCurrentInput: (input: string) => void;

  /**
   *
   * @param history The new history of commands
   * @returns A new state with the updated command history.
   * This function is used to set the command history in the context.
   */
  setCommandHistory: (history: ICommandHistory[] | null) => void;

  /**
   * Adds a new command history entry to the existing history.
   * @param history The command history entry to add.
   * @return A new state with the added command history entry.
   */
  addCommandHistory: (history: ICommandHistory[]) => void;

  /**
   *  Starting point to add buffered commands to the command history.
   *  This function is used to play buffered commands in the terminal.
   *  It will take the buffered commands and add them to the command history.
   *  It'll be used to animate the commands in the terminal properly.
   */
  playBufferedCommands: (history: ICommandHistory[]) => Promise<void>;

  /**
   * Clears the command history in the context.
   * @returns A new state with an empty command history.
   */
  clearCommandHistory: () => void;

  /**
   * Clears the input field in the terminal.
   * This function is used to clear the input field after a command is executed.
   */
  clearInput: () => void;

  /**
   * Clears the buffer in the terminal.
   * This function is used to clear the buffer of messages in the terminal.
   */
  clearBuffer: () => void;

  /**
   * Focuses the input field in the terminal.
   * This function is used to focus the input field when needed.
   */
  focusInput: () => void;
}

export interface IWindowsContext {
  /**
   * The actual main value of the context
   */
  allWindows: WindowItem[];

  /**
   * Indicates if the context is loading.
   * This is used to show a loading state in the UI.
   */
  loading: boolean;

  /**
   * get the item corresponding to the id set in params.
   */
  getItem: (id: string) => WindowItem | undefined;

  /**
   * Opens a new window with the given item.
   * @param windowItem The item to open in a new window.
   */
  openWindow: (fileName: string) => void;

  /**
   * closes a window with the given id.
   * @param id The id of the window to close.
   */
  closeWindow: (id: string) => void;
}

export interface DependencyContextMap {
  folderContext: FoldersContextInterface;
  terminalContext: TerminalInputsContextProviderInterface;
  windowContext: IWindowsContext; // Optional, can be any context related to windows
}

/**
 * Interface for the context of a command in a terminal-like environment.
 * It contains the arguments passed to the command and a method to print output.
 */
export interface CommandContext {
  args: string[]; // Arguments passed to the command
  inject?: Partial<DependencyContextMap>;
}

/**
 * Type definition for a command handler function.
 * It takes a CommandContext as an argument and returns JSX or void.
 */
export type CommandHandler = (ctx: CommandContext) => HandlerResponse;

export type HandlerResponse = {
  response?: JSX.Element | void; // The output of the command, can be a JSX element or void
  toBeExecuted?: FunctionToExecute[]; // Optional command to execute after the handler
  toBeBuffered?: JSX.Element[]; // Optional messages to buffer
};

export type FunctionToExecute = {
  function: ((arg: string[]) => void) | ((arg: string) => void);
  args: string[] | string;
};

/**
 * Registry of commands where the key is the command name
 * and the value is the command handler function.
 */
export type CommandRegistry = Record<string, CommandEntry>;

/**
 * Interface for a command history entry after execution.
 * This is used to store the command, its arguments,
 * and the output generated after execution.
 */
export interface CommandMetadata {
  description: string;
  usage: string;
  options?: string[];
  strictArgs?: boolean; // If true, the command will only accept the specified options
}

/**
 * Interface for a command history entry.
 * It includes the parsed command, its metadata,
 * and the output generated after execution.
 */
export interface CommandEntry {
  handler: CommandHandler;
  meta?: CommandMetadata;
  inject?: (keyof DependencyContextMap)[];
}

/**
 * Interface for a command history entry before it's execution.
 * This is used to store the command and its arguments
 * before it is executed in the terminal.
 */
export interface ParsedCommand {
  command: string;
  args: string[];
}

/**
 * Interface for the command history in a terminal-like environment.
 * It contains the command name and an optional response
 * that is a JSX element representing the output of the command.
 */
export interface ICommandHistory {
  input: string; // The command that was executed
  historyPrompt: ReactNode;
  response?: JSX.Element | void;
  userEntered: boolean; // Indicates if the command was entered by the user
}
