const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const API = {
  getAllUsers: () => `${baseUrl}users`,
};
