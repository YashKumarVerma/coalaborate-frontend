const { cleanURL } = require('./cleaner');

export const getCurrentUrl = () => {
  console.log('fetching current URL');
  return new Promise((resolve) => {
    chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
      resolve(cleanURL(tabs[0].url));
    });
  });
};
