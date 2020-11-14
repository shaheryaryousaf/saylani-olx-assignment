import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: 'AIzaSyAUX7YmbM1FsnE4MZ9_GO_j5fADoebfRrA',
  authDomain: 'saylani-olx-assignment.firebaseapp.com',
  databaseURL: 'https://saylani-olx-assignment.firebaseio.com',
  projectId: 'saylani-olx-assignment',
  storageBucket: 'saylani-olx-assignment.appspot.com',
  messagingSenderId: '135023675372',
  appId: '1:135023675372:web:4c4e1a5287441c37e662c9',
  measurementId: 'G-YRSMHM8G40',
}

export const firebase2 = firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth
export const db = firebase.database()
export const storage = firebase.storage()
