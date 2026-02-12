//@@viewOn:imports
import type { Auth, GoogleAuthProvider } from "firebase/auth";
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
let firebasePromise:
  | Promise<{
      auth: Auth;
      googleProvider: GoogleAuthProvider;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      signInWithPopup: (auth: Auth, provider: GoogleAuthProvider) => Promise<any>;
      signOut: (auth: Auth) => Promise<void>;
    }>
  | null = null;

export const getFirebaseAuth = async () => {
  if (!isFirebaseConfigured) {
    throw new Error("Firebase není nakonfigurován (.env.local chybí).");
  }

  if (!firebasePromise) {
    firebasePromise = (async () => {
      const { initializeApp } = await import("firebase/app");
      const { getAuth, GoogleAuthProvider, signInWithPopup, signOut } = await import("firebase/auth");

      const app = initializeApp(firebaseConfig);
      const auth = getAuth(app);
      const googleProvider = new GoogleAuthProvider();

      return { auth, googleProvider, signInWithPopup, signOut };
    })();
  }

  return firebasePromise;
};
//@@viewOff:initialization
