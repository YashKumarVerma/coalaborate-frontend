const axios = require('axios').default;
const { CONFIG } = require('../../../config');

export const getNotesForUrl = async (url) => {
  try {
    console.log(`fetching.notes.for.${url}`);
    const { data } = await axios.post(`${CONFIG.URL}/note/url`, { url });
    console.log(`fetching all notes for ${url} : `, data);
    return data.payload;
  } catch (e) {
    console.error(e);
    return [];
  }
};
