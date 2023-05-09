
import configuration from 'constants/config'
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import Router from 'next/router'
import authStore from 'stores/authStore'

declare module 'axios' {
  export interface AxiosRequestConfig {
    authenticationHeader?: string
  }
}

const apiClient = axios.create({
  baseURL: `${configuration.api.BASE_URL}/api`,
})

apiClient.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config.url?.includes('register')) {
    const authStorage = localStorage.getItem('auth') ?? null
    const parsedAuthStorage = authStorage ? JSON.parse(authStorage) : null
    config.headers = {
      ...config.headers,
      Authorization: parsedAuthStorage?.jwt
        ? 'Bearer ' + parsedAuthStorage?.jwt
        : '',
    }
  }
  return config
})

apiClient.interceptors.response.use(
  (response: AxiosResponse<any, any>) => {
    return response
  },
  (error: AxiosError) => {
    if (error?.response?.status === 401) {
      authStore.getState().clearAuth()
      if (
        document.location.pathname !== '/' &&
        !document.location.pathname.includes('auth')
      ) {
        authStore.getState().setLastPage(document.location.pathname)
      }
      setTimeout(() => {
        Router.replace('/auth/sign-in')
      }, 10)
    }
    throw error
  }
)

// AUTH

export default apiClient
