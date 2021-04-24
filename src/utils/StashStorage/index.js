import lz from 'lz-string';
// const lz = require('lz-string');

/**
 * CUSTOM any conforming storage api implementing the following
 * methods: setItem getItem removeItem.
 * (NB: These methods must support promises)
 *
 * Source: https://www.npmjs.com/package/redux-persist#storage-engines
 */
const StashStorage = {
  setItem: async (key, value) => {
    const wrap_stash = process.env.NODE_ENV === 'development' ? a => a : stash;
    localStorage.setItem(key, wrap_stash(value));
  },

  getItem: async key => {
    const wrap_unstash =
      process.env.NODE_ENV === 'development' ? a => a : unstash;
    return wrap_unstash(localStorage.getItem(key));
  },

  removeItem: localStorage.removeItem,

  clear: localStorage.clear,
};

/**
 * Usar esse método aqui pra chamar o stash
 * http://programadorobjetivo.co/call-apply-e-bind-em-javascript/
 */
const stash = obj => {
  const level_one = lz.compress(JSON.stringify(obj));
  const level_two = lz.compressToBase64(level_one);
  return level_two;
};

const unstash = key => {
  const level_two = lz.decompressFromBase64(key);
  const level_one = lz.decompress(level_two);
  return JSON.parse(level_one);
};

export default StashStorage;

/**
 * TESTE EM JS
 *
 * Você pode rodar o teste abaixo com a Extesão 'Code Runner' do VSCode
 * Obs: mudar de 'import' para 'require'
 */

// const a = {
//   saron: 'Teste',
//   salario: 'R$10.100',
// };

// console.log('INITIALIZING STASH', stash(a));

// const t = stash(a);

// console.log('saida', unstash(t));
