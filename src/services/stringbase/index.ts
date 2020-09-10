import lz from 'lz-string';

const compress = (str: string) => {
  if (__DEV__) return str;
  return lz.compress(str);
};

const decompress = (str: string) => {
  if (__DEV__) return str;
  return lz.decompress(str);
};

export const stringbase = {
  getItem: async <T>(key: string): Promise<T | null> => {
    const stringCompressed: string = localStorage.getItem(key) || '';
    if (!stringCompressed) return null;
    const stringDescompressed = lz.decompress(stringCompressed) || '';
    const restauredObject: T = JSON.parse(stringDescompressed);
    return restauredObject;
  },

  setItem: async (key: string, value: any) => {
    const stringDescompressed = JSON.stringify(value);
    const stringCompressed = lz.compress(stringDescompressed);
    localStorage.setItem(key, stringCompressed);
  },
};
