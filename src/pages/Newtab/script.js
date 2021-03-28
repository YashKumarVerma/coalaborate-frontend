const axios = require('axios').default;
const { CONFIG } = require('../../config');

/** to signup into server */
// export const SignUpScript = async (email, password) =>
//   new Promise((resolve, reject) => {
//     console.log('starting login process');
//     axios
//       .post(`${CONFIG.URL}/user`, { email, password })
//       .then(({ data }) => {
//         console.log(data);
//         localStorage.setItem('token', data.payload);
//         resolve({ error: false });
//       })
//       .catch((error) => {
//         reject(error.response.data);
//       });
//   });

/** to login into server */
export const LogInScript = async (email, password) =>
  new Promise((resolve, reject) => {
    console.log('starting login process');
    axios
      .post(`${CONFIG.URL}/auth/login`, { email, password })
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem('token', data.payload.token);
        resolve({ error: false });
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
