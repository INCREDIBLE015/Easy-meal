import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAGxYYRxvu0p37Xzu2nqFwSWoRCD7e8PHU",
    authDomain: "easymeal-b2bf4.firebaseapp.com",
    databaseURL: "https://easymeal-b2bf4.firebaseio.com",
    projectId: "easymeal-b2bf4",
    storageBucket: "easymeal-b2bf4.appspot.com",
    messagingSenderId: "772581018858",
    appId: "1:772581018858:web:a1ab5f8c3cce444dab9b93",
    measurementId: "G-B7FCYWMM9S"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });
  export default firebase