import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import { AuthReducerStateInterface, AuthReducerActionInterface } from '../types/reducers.types'

import { getToken } from '../utils/auth'

let storageAuthState = getToken()

const initialState = {
  isAuth: storageAuthState ? true : false,
  jwt: storageAuthState ? storageAuthState.jwt : null,
  user: storageAuthState ? storageAuthState.user : null
} as AuthReducerStateInterface

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize(state, action: PayloadAction<AuthReducerActionInterface>) {
      state.isAuth = true
      state.jwt = action.payload.jwt
      state.user = action.payload.user
    },
    deauthorize(state) {
      state.isAuth = false
      state.jwt = null
      state.user = null
    }
  }
})

export const { authorize, deauthorize } = authSlice.actions
export default authSlice.reducer