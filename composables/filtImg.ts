export const filtImg = (html: string) => {
  return html.replaceAll('<img src="', '<img src="' + baseURL());
};
