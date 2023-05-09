const config = {
  api: {
    BASE_URL: process?.env?.NEXT_PUBLIC_BASE_URL,
    APP_VERSION: process?.env?.NEXT_PUBLIC_APP_VERSION,
  },
  app: {
    MODE: process?.env?.NODE_ENV,
  },
}

export default config
