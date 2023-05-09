import { AxiosResponse } from 'axios'
import authStore from 'stores/authStore'
import { useMutation, UseMutationOptions } from 'react-query'
import { useRouter } from 'next/router'
import apiClient from 'services/apis'

interface IEmailLoginBody {
  identifier?: any
  password?: any
}
const postEmailLogin = async (body: IEmailLoginBody) =>
  await apiClient.post('/auth/local', body)

const usePostEmailLogin = (
  options?: UseMutationOptions<
    AxiosResponse<any, any>,
    unknown,
    IEmailLoginBody,
    unknown
  >
) => {
  const { setAuth } = authStore((state) => state)
  const router = useRouter()

  return useMutation(postEmailLogin, {
    ...options,
    onSuccess: (response, body, context) => {
      if (response) {
        const { jwt, user } = response?.data ?? {}
        setAuth(jwt, 'email', {
          email: user?.email,
          username: user?.username,
          // fullname: user?.Profile?.fullname,
          // photo: user?.Profile?.photo,
          // UserOrganizations: user?.UserOrganizations[0],
        })
        router.push('/dashboard')

        if (options?.onSuccess) {
          options?.onSuccess(response, body, context)
        }
      } else {
        throw response
      }
    },
    onError: (error: any, body, context) => {
      console.log({ error })
      if (options?.onError) {
        options?.onError(error, body, context)
      }
    },
  })
}

export default usePostEmailLogin
