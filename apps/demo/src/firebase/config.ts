//@@viewOn:imports
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
//@@viewOff:imports

//@@viewOn:constants
// Firebase configuration (public)
const firebaseConfig = {
  apiKey: "AIzaSyBLipHjriMRGRQ24eCn6LDw3Vvnpz95yp8",
  authDomain: "react-ts-ui-lib.firebaseapp.com",
  projectId: "react-ts-ui-lib",
  storageBucket: "react-ts-ui-lib.firebasestorage.app",
  messagingSenderId: "811921850771",
  appId: "1:811921850771:web:1770b4ac659f3aa3b52866",
};

export const isFirebaseConfigured = true;
//@@viewOff:constants

//@@viewOn:initialization
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
//@@viewOff:initialization

export default app;
