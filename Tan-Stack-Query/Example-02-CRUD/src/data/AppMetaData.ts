import type { AppMetaModel } from "../types/AppMetaModel.types";


export const AppMetadata: AppMetaModel = {
  title: import.meta.env.VITE_APP_TITLE,
  description: import.meta.env.VITE_APP_DESCRIPTION,
  version: import.meta.env.VITE_APP_VERSION,
};
