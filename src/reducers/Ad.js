import {
  GET_ADS,
  GET_ADS_FAIL,
  GET_SINGLE_AD,
  GET_SINGLE_AD_FAIL,
  ADD_NEW_AD,
  ADD_NEW_AD_FAIL,
} from '../actions/types'

const initialState = {
  ads: [],
  item: {},
}

const Ad = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case GET_ADS:
      return {
        ...state,
        ads: payload,
      }
    case GET_SINGLE_AD:
      return {
        ...state,
        item: payload,
      }
    case ADD_NEW_AD:
      return {
        ...state,
        ads: [payload, ...state.ads],
      }
    case GET_ADS_FAIL:
    case GET_SINGLE_AD_FAIL:
    case ADD_NEW_AD_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}
export default Ad
