/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: any;
  readonly VITE_AUTH_DOMAIN: any,
  readonly VITE_DATABASE_URL: any,
  readonly VITE_PROJECT_ID: any,
  readonly VITE_STORAGE_BUCKET: any,
  readonly VITE_MESSAGING_SENDER_ID: any,
  readonly VITE_APP_ID: any,
  readonly VITE_MEASUREMENT_ID: any
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}



