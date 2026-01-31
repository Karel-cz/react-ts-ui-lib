//@@viewOn:imports
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { User, UserCredential } from "firebase/auth";
import { 
  onAuthStateChanged, 
  signInWithPopup, 
  signOut as firebaseSignOut
} from "firebase/auth";
import { auth, googleProvider, isFirebaseConfigured } from "../../firebase/config";
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!auth) {
      setLoading(false);
      return () => undefined;
    }

    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signInWithGoogle = async () => {
    if (!isFirebaseConfigured || !auth || !googleProvider) {
      throw new Error("Firebase není nakonfigurován (.env.local chybí).");
    }

    return await signInWithPopup(auth, googleProvider);
  };

  const signOut = async () => {
    if (!auth) return;
    await firebaseSignOut(auth);
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
