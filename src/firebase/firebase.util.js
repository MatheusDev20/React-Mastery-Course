import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCea8UlpRakEelEf81lfnrWTxuGHSDE7P4",
    authDomain: "store-db-6e826.firebaseapp.com",
    databaseURL: "https://store-db-6e826.firebaseio.com",
    projectId: "store-db-6e826",
    storageBucket: "store-db-6e826.appspot.com",
    messagingSenderId: "380820898016",
    appId: "1:380820898016:web:1405917de0332b7f34d085"
  };
  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
})
export const SignWithGoogle =  () => auth.signInWithPopup(provider);
export default firebase;