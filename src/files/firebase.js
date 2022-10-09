 import firebase from 'firebase';
 
 var firebaseConfig = {
  apiKey: "AIzaSyC5qc0_y6RH0sx2Hy0SOvfBQyH_v3nz7H8",
  authDomain: "moviebookingapplication-5db09.firebaseapp.com",
  databaseURL: "https://moviebookingapplication-5db09-default-rtdb.firebaseio.com",
  projectId: "moviebookingapplication-5db09",
  storageBucket: "moviebookingapplication-5db09.appspot.com",
  messagingSenderId: "400232538342",
  appId: "1:400232538342:web:1b7788f1c1009b34e61b27",
  measurementId: "G-01RNVXSRW6"
  };
  // Initialize Firebase
   var fire = firebase.initializeApp(firebaseConfig);

   export default fire;