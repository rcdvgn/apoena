"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

// import { User } from "../_types/global";

import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../_config/firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

interface AuthContextValue {
  loading: boolean;
  user: any;
  setUser: (user: any) => void;
  signInWithEmail: (email: any, password: any) => Promise<void>;
  signUpWithEmail: (email: any, password: any) => Promise<void>;
  signOff: () => Promise<void>;
}

const AuthContext = createContext<AuthContextValue>({
  loading: true,
  user: null,
  setUser: () => {},
  signInWithEmail: () => Promise.resolve(),
  signUpWithEmail: () => Promise.resolve(),
  signOff: () => Promise.resolve(),
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // const router = useRouter();

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  const signUpWithEmail = async (email: any, password: any) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        console.log("You just logged in with new user: " + userCredential.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const signInWithEmail = async (email: any, password: any) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        console.log(
          "You just logged in with existing user: " + userCredential.user
        );
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const signOff = async () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    console.log(user);
    const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
      console.log("entered unsubscribe");
      if (currUser) {
        const userRef = doc(db, "users", currUser.uid);
        const userDoc = await getDoc(userRef);

        if (userDoc.exists()) {
          setUser(userDoc.data());
        } else {
          setUser(currUser);
          // router.push("/create-account");
        }
      } else {
        setUser(null);
      }
      console.log("exited data fetching");
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        setUser,
        signInWithEmail,
        signUpWithEmail,
        signOff,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
