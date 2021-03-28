/** proudly copied from https://stackoverflow.com/questions/2540969/remove-querystring-from-url  */
export const cleanURL = (url) => {
  return url.split(/[?#]/)[0];
};
