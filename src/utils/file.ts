import { promises } from 'fs';

export const deleteFile = async (filename: string) => {
  try {
    await promises.stat(filename);
  } catch (error) {
    return null;
  }
  await promises.unlink(filename);
  return null;
};
