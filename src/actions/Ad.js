import {
  ADD_NEW_AD,
  ADD_NEW_AD_FAIL,
  GET_ADS,
  GET_ADS_FAIL,
  GET_SINGLE_AD,
  GET_SINGLE_AD_FAIL,
} from '../actions/types'
import { db } from '../config/firebase'

/* ============================== */
/* GET ALL ADS */
/* ============================== */
export const getAds = () => async (dispatch) => {
  try {
    db.ref('items').on('value', (snapshot) => {
      let itemsList = []
      snapshot.forEach((snap) => {
        var key = snap.key
        var data = snap.val()
        const {
          title,
          condition,
          description,
          price,
          phone,
          state,
          city,
          added_by,
          image,
          date,
        } = data
        itemsList.push({
          key: key,
          title: title,
          condition: condition,
          description: description,
          price: price,
          phone: phone,
          state: state,
          city: city,
          image: image,
          added_by: added_by,
          date: date,
        })
      })
      dispatch({
        type: GET_ADS,
        payload: itemsList,
      })
    })
  } catch (err) {
    dispatch({
      type: GET_ADS_FAIL,
    })
  }
}

/* ============================== */
/* GET SINGLE AD */
/* ============================== */
export const getSingleAd = (id) => async (dispatch) => {
  try {
    db.ref(`items/${id}`).on('value', (snapshot) => {
      const itemSingle = snapshot.val()
      dispatch({
        type: GET_SINGLE_AD,
        payload: itemSingle,
      })
    })
  } catch (err) {
    dispatch({
      type: GET_SINGLE_AD_FAIL,
    })
  }
}

/* ============================== */
/* ADD NEW AD */
/* ============================== */
export const addNewAd = (data) => async (dispatch) => {
  try {
    const res = db.ref('/').child('items').push(data)
    dispatch({
      type: ADD_NEW_AD,
      payload: res,
    })
  } catch (err) {
    dispatch({
      type: ADD_NEW_AD_FAIL,
    })
  }
}
