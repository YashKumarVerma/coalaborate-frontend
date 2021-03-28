const axios = require('axios').default;
const { CONFIG } = require('../../../config');

export const PostNewNote = async (title, body, url) => {
  try {
    console.log(`posting.notes.for.${url}`);
    const { data } = await axios.post(`${CONFIG.URL}/note/general/note`, {
      title,
      body,
      url,
    });
    console.log(`posting.notes.for.${url}`, data);
    return true;
  } catch (e) {
    return false;
  }
};
