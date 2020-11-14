import { AUTH_SUCCESSFUL, AUTH_FAIL, SIGNOUT } from '../actions/types'

const initialState = {
  user: null,
  isAuthenticated: localStorage.getItem('access') ? true : false,
  token: localStorage.getItem('access'),
}

const auth = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case AUTH_SUCCESSFUL:
      localStorage.setItem('access', payload.token)
      return {
        ...state,
        user: payload.user,
        isAuthenticated: true,
        token: payload.token,
      }
    case AUTH_FAIL:
    case SIGNOUT:
      localStorage.removeItem('access')
      return {
        ...state,
        user: null,
        isAuthenticated: false,
      }
    default:
      return state
  }
}
export default auth
