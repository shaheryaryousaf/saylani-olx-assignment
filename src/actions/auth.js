import { AUTH_SUCCESSFUL, AUTH_FAIL, SIGNOUT } from './types'
import { auth, firebase2 } from '../config/firebase'

/* ================================================ */
/* FACEBOOK LOGIN */
/* ================================================ */
export const fbLogin = () => async (dispatch) => {
  try {
    var provider = new auth.FacebookAuthProvider()
    firebase2
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        var user = result.user
        var token = result.credential.accessToken
        dispatch({
          type: AUTH_SUCCESSFUL,
          payload: { user, token },
        })
      })
  } catch (err) {
    dispatch({
      type: AUTH_FAIL,
    })
  }
}

/* ================================================ */
/* FACEBOOK LOGOUT */
/* ================================================ */

export const signOut = () => (dispatch) => {
  firebase2
    .auth()
    .signOut()
    .then(function () {
      dispatch({
        type: SIGNOUT,
      })
    })
    .catch(function (error) {
      console.log(error)
    })
}
