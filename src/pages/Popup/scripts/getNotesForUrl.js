const axios = require('axios').default;
const { CONFIG } = require('../../../config');

export const getNotesForUrl = async (url) => {
  try {
    console.log(`fetching.notes.for.${url}`);
    const { data } = await axios.get(`${CONFIG.URL}/url`, {
      params: { url },
    });
    return data.payload;
  } catch (e) {
    return [];
  }
};
