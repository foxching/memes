import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAjzSuEa9V86j0b2e0cI_V_DEG1t1UezsU",
  authDomain: "tshirt-memes.firebaseapp.com",
  databaseURL: "https://tshirt-memes.firebaseio.com",
  projectId: "tshirt-memes",
  storageBucket: "tshirt-memes.appspot.com",
  messagingSenderId: "672908073463",
  appId: "1:672908073463:web:18d6e94bac4d644826f6f2",
  measurementId: "G-6K43EQG49D"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { firebaseConfig, storage as default };
