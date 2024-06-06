"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

import { getDoc, doc } from "firebase/firestore";
import { auth, db } from "../_config/firebase";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const router = useRouter();

  const campaignTypes = [
    "preservacao animal",
    "reflorestamento",
    "educacao ambiental",
    "manejo sustentavel",
    "recuperacao de nascentes",
    "agricultura organica",
    "conservacao de biodiversidade",
    "ecoturismo",
    "coleta seletiva",
    "reciclagem",
    "energia renovavel",
    "saneamento basico",
    "protecao de areas umidas",
    "agroflorestas",
    "combate a desertificacao",
    "gestao de residuos",
    "protecao de corais",
    "monitoramento ambiental",
    "economia circular",
    "restauracao de ecossistemas",
  ];

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUpWithEmail = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("You just logged in with new user: " + userCredential.user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.error(errorMessage);
      });
  };

  const signInWithEmail = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
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
    // console.log("context: " + user);
    const unsubscribe = onAuthStateChanged(auth, async (currUser) => {
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
        campaignTypes,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
