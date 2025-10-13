import { Folder } from '../types/contexts/folders';

export const audioTranscriptions: Folder = {
  name: 'audio_transcriptions',
  children: [],
};

export const logsFolder: Folder = {
  name: 'logs',
  children: [audioTranscriptions],
};

export const imagesFolder: Folder = {
  name: 'images',
  children: [],
};

export const videosFolder: Folder = {
  name: 'videos',
  children: [],
};

export const audioFolder: Folder = {
  name: 'audio',
  children: [],
};

export const mediaFolder: Folder = {
  name: 'media',
  children: [audioFolder, videosFolder, imagesFolder],
};

export const missionsFolder: Folder = {
  name: 'missions',
  children: [],
};

export const adminFolder: Folder = {
  name: 'admin',
  children: [],
};

export const notesFolder: Folder = {
  name: 'notes',
  children: [],
};

export const documentsFolder: Folder = {
  name: 'documents',
  children: [missionsFolder, adminFolder, notesFolder],
};

export const zipFolder: Folder = {
  name: 'zip',
  children: [],
};

export const cryptFolder: Folder = {
  name: 'crypt',
  children: [],
};

export const archiveFolder: Folder = {
  name: 'archive',
  children: [zipFolder, cryptFolder],
};

export const adminUsersFolder: Folder = {
  name: 'admin',
  children: [],
};

export const guestUsersFolder: Folder = {
  name: 'guest',
  children: [],
};

export const usersFolder: Folder = {
  name: 'users',
  children: [adminUsersFolder, guestUsersFolder],
};

export const secretsFolder: Folder = {
  name: 'secrets',
  children: [],
};

export const systemFolder: Folder = {
  name: 'system',
  children: [secretsFolder, usersFolder],
};

export const rootFolder: Folder = {
  name: '~',
  children: [
    logsFolder,
    mediaFolder,
    documentsFolder,
    archiveFolder,
    systemFolder,
  ],
};
