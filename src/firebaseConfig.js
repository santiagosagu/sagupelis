import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
    apiKey: "AIzaSyAVwZ-gATCC9zOF8BOVhjupc5cASI0TWro",
    authDomain: "comentarios-sagupelis.firebaseapp.com",
    projectId: "comentarios-sagupelis",
    storageBucket: "comentarios-sagupelis.appspot.com",
    messagingSenderId: "206802014226",
    appId: "1:206802014226:web:f9595d257b7c03691388cb",
    measurementId: "G-HHFNBXRX8V"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);
  const db = fire.firestore()
  firebase.analytics();

  export { db }