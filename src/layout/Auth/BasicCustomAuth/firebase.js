//? We Do not import app directly else we use normal exports as auth firestore to use thier features
import firebase from "firebase/app";
import  "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAONvw5enR8yzt9knBZEZ0BX3lJEXFHLk",
  authDomain: "todo-app-hoisted.firebaseapp.com",
  databaseURL: "https://todo-app-hoisted-default-rtdb.firebaseio.com",
  projectId: "todo-app-hoisted",
  storageBucket: "todo-app-hoisted.appspot.com",
  messagingSenderId: "543261144652",
  appId: "1:543261144652:web:cb86574794c65d58d5a6e9",
  measurementId: "G-D0G2LJEZJT",
};

//? Now App Contains All features Firebase Offers
const App = firebase.initializeApp(firebaseConfig);
//! console.log("firebase.initializeApp", App);

// * MAjor Auth Function is created For useing Auth Related Features
export const  auth = App.auth();


//?  We are just creating refrence to actual firebase features to use into appps 
// * To use Analytics it will create refrence and intialize
// export const analytics = App.analytics;

// * To use firestore it will create refrence and intialize
// export const db = App.firestore;
export default App;
