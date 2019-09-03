import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBx1WM4zAhoGgiWm_OyP8Cn3_8RU4Ihbpo',
  authDomain: 'redux-shop-1a6cc.firebaseapp.com',
  databaseURL: 'https://redux-shop-1a6cc.firebaseio.com',
  projectId: 'redux-shop-1a6cc',
  storageBucket: 'redux-shop-1a6cc.appspot.com',
  messagingSenderId: '577671156636',
  appId: '1:577671156636:web:01b6e62d14f5420c'
};
firebase.initializeApp(config);

export default firebase;

export const db = firebase.firestore();
