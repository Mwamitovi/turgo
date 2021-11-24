import { AuthProvider } from 'react-admin';
import { BASE_URL } from 'modules';

const authProvider: AuthProvider = {
  login: ({ username, password }) => {
    const url = BASE_URL + '/api/token/';

    const request = new Request(url, {
      method: 'POST',
      body: `username=${username}&password=${password}`,
      headers: new Headers({
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      }),
    });

    return fetch(request)
      .then(response => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error('Wrong username or password. Try again!');
        }
        return response.json();
      })
      .then(({ access }) => {
        sessionStorage.setItem('token', access);
      });
  },

  logout: () => {
    sessionStorage.clear();
    return Promise.resolve();
  },

  checkError: error => {
    const status = error.status;

    if (status === 401 || status === 403) {
      sessionStorage.clear();
      return Promise.reject();
    }

    return Promise.resolve();
  },

  checkAuth: () =>
    sessionStorage.getItem('token') ? Promise.resolve() : Promise.reject(),

  getPermissions: () => 
    Promise.reject('Unknown method'),

  getIdentity: () =>
    Promise.resolve({
      id: '1',
      fullName: 'Admin',
      avatar: ''
    }),
};

export default authProvider;