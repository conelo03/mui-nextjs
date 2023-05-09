
import create from 'zustand'
import { persist } from 'zustand/middleware'
import produce from 'immer'
import User from 'interfaces/user'

type AuthType = 'email' | 'google' | null

export interface AuthStateType {
  authToken?: string
  authType?: AuthType
  userData?: User
  lastPage?: string
  setAuth: (
    token?: string,
    type?: AuthType,
    userData?: User,
    callback?: () => void
  ) => void
  setLastPage: (lastPage?: string) => void
  clearAuth: () => void
}

const authStore = create<AuthStateType>(
  persist(
    (set) => ({
      authToken: undefined,
      userData: undefined,
      authType: undefined,
      setLastPage: () => {
        set(
          produce((draft: AuthStateType) => {
            draft.lastPage = '/profile'
          })
        )
      },
      // setLastPage: (lastPage?: string) => {
      //   set(
      //     produce((draft: AuthStateType) => {
      //       draft.lastPage = lastPage ?? draft.lastPage
      //     })
      //   )
      // },
      setAuth: (
        token?: string,
        type?: AuthType,
        userData?: User,
        callback?: () => void
      ) => {
        set(
          produce((draft: AuthStateType) => {
            draft.authToken = token ?? draft.authToken
            draft.authType = type ?? draft.authType
            draft.userData = userData ?? draft.userData
          })
        )
        callback?.()
      },
      clearAuth: () => {
        set(
          produce((draft: AuthStateType) => {
            draft.authToken = undefined
            draft.authType = undefined
            draft.userData = undefined
          })
        )
      },
    }),
    {
      name: 'authStorage',
      getStorage: () => localStorage,
    }
  )
)

export default authStore
