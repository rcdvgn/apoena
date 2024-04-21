"use client";

import {
  collection,
  setDoc,
  getDoc,
  doc,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../_config/firebase";

export async function createUser(userData: any) {
  try {
    const newUser = {
      name: userData.displayName,
      email: userData.email,
      description: "",
      website: "",
      accountType: "individual",
      createdIn: Timestamp.now(),
    };

    const docRef = doc(collection(db, "users"), userData.uid);
    await setDoc(docRef, newUser);

    return newUser;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
