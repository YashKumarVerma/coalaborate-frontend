const { CONFIG } = require('../../config');
const axios = require('axios').default;

/** check if the server is alive */
setInterval(async () => {
  const { data } = await axios.get(CONFIG.URL);
  if (data.alive !== true) {
    alert(
      `Error connecting to database, retrying in ${CONFIG.CYCLES.ALIVE} seconds`
    );
  } else {
    console.log('server.alive');
  }
}, CONFIG.CYCLES.ALIVE * 1000);
