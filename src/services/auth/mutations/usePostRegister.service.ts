import { AxiosResponse } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { useRouter } from 'next/router'
import apiClient from 'services/apis'

interface IRegisterBody {
  username: string
  email: string
  password: string
  referralCode?: string
}
const postRegister = async (body: IRegisterBody) =>
  await apiClient.post('/auth/local/register', {
    ...body,
  })

const usePostRegister = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    IRegisterBody,
    unknown
  >
) => {
  const router = useRouter()

  return useMutation(postRegister, {
    ...options,
    onSuccess: (response, body, context) => {
      if (response) {
        const { messages } = response?.data ?? {}
        if (options?.onSuccess) {
          options?.onSuccess(response, body, context)
        }
        router.replace('/auth/signin')
        // window.open(
        //   'https://play.google.com/store/apps/details?id=com.wolinventures.bpa_app'
        // )
      } else {
        throw response
      }
    },
    onError: (error: any, body: any, context: any) => {
      if (options?.onError) {
        options?.onError(error, body, context)
      }
    },
  })
}

export default usePostRegister
