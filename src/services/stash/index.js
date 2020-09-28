import lz from 'lz-string';

/**
 * Usar esse método aqui pra chamar o stash
 * http://programadorobjetivo.co/call-apply-e-bind-em-javascript/
 */
export const stash = v => {
  const level_one = lz.compress(JSON.stringify(v));
  const level_two = lz.compressToBase64(level_one);
  return level_two;
};

export const unstash = v => {
  const level_two = lz.decompressFromBase64(v);
  const level_one = lz.decompress(level_two);
  return JSON.parse(level_one);
};

const a = {};

console.log('INITIALIZING STASH', a);
