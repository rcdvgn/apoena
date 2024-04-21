"use client";

import {
  collection,
  setDoc,
  getDocs,
  doc,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";

import { db } from "../_config/firebase";

export async function createUser(userData: any) {
  try {
    const newUser = {
      uid: userData.uid,
      displayName: userData.name,
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

export async function getCampaigns() {
  try {
    const querySnapshot = await getDocs(collection(db, "campaigns"));
    const campaignsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return campaignsData;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
  }
}
