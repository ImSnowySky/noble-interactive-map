import { fetch as polyFetch} from 'whatwg-fetch';

export const ENV = {
  DEV: 'dev',
  PROD: 'prod',
};

const getBaseURLByEnv = (env = ENV.DEV) => {
  const urlByENV = {
    [ENV.DEV]: 'http://fables.loc',
    [ENV.PROD]: 'http://noblegarden.club',
  };

  return urlByENV[env] || null;
}

class Request {
  constructor(env = ENV.PROD) {
    this.baseURL = getBaseURLByEnv(env);
  }

  buildURL(endpoint, params) {
    const clearURL = `${this.baseURL}/api/${endpoint}`;
    if (!params) return clearURL;
    const parameters = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
    return `${clearURL}?${parameters}`;
  }

  execute = (url) => polyFetch(url).then(answer => answer.json());
}

export default Request;