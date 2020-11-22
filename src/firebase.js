import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDFeeudZ7K95tj1GryUEV4MDxPedGslpHA",
    authDomain: "facebook-clone-77821.firebaseapp.com",
    databaseURL: "https://facebook-clone-77821.firebaseio.com",
    projectId: "facebook-clone-77821",
    storageBucket: "facebook-clone-77821.appspot.com",
    messagingSenderId: "320677581305",
    appId: "1:320677581305:web:d31be1aea880e6de6d2d28",
    measurementId: "G-HPRT1Q1XEH"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider }
export default db