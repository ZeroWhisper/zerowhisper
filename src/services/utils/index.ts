export const generateTypes = (name: string): any => ({
  REQUEST: `${name}/REQUEST`,
  SUCCESS: `${name}/SUCCESS`,
  FAILURE: `${name}/FAILURE`,
});
