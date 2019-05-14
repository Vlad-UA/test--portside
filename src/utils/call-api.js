import fetch from 'isomorphic-fetch';

export default function callApi(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      if (response.status !== 200) {
        throw new Error('incorrect fetch status');
      } else {
        return response;
      }
    })
    .then(response => response.json());
}
