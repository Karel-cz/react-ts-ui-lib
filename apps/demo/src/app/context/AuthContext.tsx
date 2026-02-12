//@@viewOn:imports
import { createContext, useContext, useState, type ReactNode } from "react";
import type { User, UserCredential } from "firebase/auth";
import { getFirebaseAuth, isFirebaseConfigured } from "../../firebase/config";
//@@viewOff:imports

//@@viewOn:constants
//@@viewOff:constants

//@@viewOn:types
type AuthContextType = {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<UserCredential>;
  signOut: () => Promise<void>;
};
//@@viewOff:types

//@@viewOn:context
const AuthContext = createContext<AuthContextType | undefined>(undefined);
//@@viewOff:context

//@@viewOn:provider
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const signInWithGoogle = async () => {
    if (!isFirebaseConfigured) {
      throw new Error("Firebase není nakonfigurován (.env.local chybí).");
    }

    setLoading(true);
    try {
      const { auth, googleProvider, signInWithPopup } = await getFirebaseAuth();
      const credential = await signInWithPopup(auth, googleProvider);
      setUser(credential.user);
      return credential;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    if (!isFirebaseConfigured) return;
    setLoading(true);
    try {
      const { auth, signOut: firebaseSignOut } = await getFirebaseAuth();
      await firebaseSignOut(auth);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
//@@viewOff:provider

//@@viewOn:hook
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
//@@viewOff:hook
