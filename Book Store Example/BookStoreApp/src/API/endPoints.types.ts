const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const Endpoints = {
  status: {
    getAll: `${baseUrl}/status`,
    getById: `${baseUrl}/status/:id`
  },
  genres: {
    getAll: `${baseUrl}/genres`,
    getById: `${baseUrl}/genres/:id`
  },
  tags: {
    getAll: `${baseUrl}/tags`,
    getById: `${baseUrl}/tags/:id`
  },
  Books: {
    getAll: `${baseUrl}/books`,
    getById: `${baseUrl}/books/:id`,
    create: `${baseUrl}/books`,
    updatePut: `${baseUrl}/books/:id`,
    updatePatch: `${baseUrl}/books/:id`,
    delete: `${baseUrl}/books/:id`
  }

};
