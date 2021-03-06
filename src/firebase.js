// mvpが完成したら、envファイルに移行

import * as firebase from 'firebase';
// 使いたい機能ごとにimportしていく
import "firebase/firestore";
import 'firebase/auth';
import "firebase/storage";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyC4JgUi5XUzqlNCiOVz7haX9YvEEnGq0W4",
  authDomain: "fetimatch.firebaseapp.com",
  databaseURL: "https://fetimatch.firebaseio.com",
  projectId: "fetimatch",
  storageBucket: "fetimatch.appspot.com",
  messagingSenderId: "304711170830",
  appId: "1:304711170830:web:f8ab1923f0d4bfd65f755f",
  measurementId: "G-HSRWF24XYV"
}

firebase.initializeApp(config);

// cloud firestore
export const db = firebase.firestore();
// firebase storage(画像やファイル保存用)
export const storage = firebase.storage();
// cloud functions for firebase
export const functions = firebase.functions();
// firebase apiとの接続
export default firebase;


