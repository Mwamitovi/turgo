import * as request from 'superagent';

export const BASE_URL = `${
  process.env.NODE_ENV !== 'production'
    ? process.env.REACT_APP_API
    : process.env.REACT_APP_HEROKU
}`;

export const apiCall = (data, header, type, url) =>
  new Promise((resolve, reject) => {
    request[type](BASE_URL + `/${url}`)
      .send(data)
      .set('Content-Type', 'application/json')
      .set('authorization', 'Bearer ' + header)
      .end((err, res) => {
        if (res) {
          // console.log(res)
          return resolve(res.body);
        }        
        // console.log(err);
        return reject(err);
      });
  });
