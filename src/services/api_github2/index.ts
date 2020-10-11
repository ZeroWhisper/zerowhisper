import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://api.github.com',
});

// /repos/:owner/:repo/contents/:path

// curl -H 'Authorization: token my-oauth-token' https://api.github.com/user/repos

/**
 * @param url - String like "/repo/:login/:content"
 * @param options - Object must have properties with :property from url
 *
 * @return String
 */
export const replace = (url: string, options?: any) => {
  // if (!options) throw new Error('Options must be setted');
  // console.log('recebi', options);

  const result = url.replace(/(:[a-zA-Z]*)/gi, match => {
    const arg = match.slice(1, match.length);

    if (!options[arg]) {
      throw new Error(`Option must be have '${arg}' property`);
    }

    return options[arg];
  });

  return result;
};

export default api;
