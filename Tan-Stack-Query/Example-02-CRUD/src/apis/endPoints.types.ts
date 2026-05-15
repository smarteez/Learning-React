const baseUrl = import.meta.env.VITE_BASE_API_URL;

export const Endpoints = {
  statusTypes: {
    getAll: `${baseUrl}/statusTypes`,
    getById: `${baseUrl}/statusTypes/:id`
  },

  productCategories: {
    getAll: `${baseUrl}/productCategories`,
    getById: `${baseUrl}/productCategories/:id`,
  },

  productTypes: {
    getAll: `${baseUrl}/productTypes`,
    getById: `${baseUrl}/productTypes/:id`,
    getByCategoryId: `${baseUrl}/productTypes?categoryId=:id`
  },

  products: {
    getAll: `${baseUrl}/products`,
    getById: `${baseUrl}/products/:id`,
    create: `${baseUrl}/products`,
    updatePut: `${baseUrl}/products/:id`,
    updatePatch: `${baseUrl}/products/:id`,
    delete: `${baseUrl}/products/:id`
  }
};
