import { AxiosResponse } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { useRouter } from 'next/router'
import apiClient from 'services/apis'

const postLogout = () => apiClient.post('/logout')

export const usePostLogout = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    unknown,
    unknown
  >
) => {
  const router = useRouter()

  return useMutation(
    () => {
      return postLogout()
    },
    {
      ...options,
      onSuccess: (response, body, context) => {
        router.replace('/auth/signin')
        if (options?.onSuccess) {
          options?.onSuccess(response, body, context)
        }
      },
      onError: (error: any, body, context) => {
        console.error({ error })
        if (options?.onError) {
          options.onError(error, body, context)
        }
      },
    }
  )
}
