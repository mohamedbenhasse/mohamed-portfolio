// Every static file lives in /public and must be resolved through Vite's base
// path so the site keeps working under https://<user>.github.io/mohamed-portfolio/
export const asset = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;
