import httpClient from './implementation';

const client = {
  get: (url, config) => httpClient.get(url, config),

  post: async (url, data = {}, config) => httpClient.post(url, data, config),

  put: async (url, data = {}, config) => httpClient.put(url, data, config),

  patch: (url, data, config) => httpClient.patch(url, data, config),

  delete: (url, config) => httpClient.delete(url, config),

  modifyHeaders: headers => {
    httpClient.defaults.headers = {
      ...httpClient.defaults.headers,
      ...headers,
    };
  },

  setBaseUrl: url => {
    httpClient.defaults.baseURL = url;
  },

  setTimeout: timeout => {
    httpClient.defaults.timeout = timeout;
  },
};

export default client;
