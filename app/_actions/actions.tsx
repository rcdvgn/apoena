"use client";

import {
  collection,
  setDoc,
  getDocs,
  doc,
  query,
  where,
  Timestamp,
  addDoc,
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

export async function getComments(campaignId: any) {
  try {
    const q = query(
      collection(db, "comments"),
      where("campaignId", "==", campaignId)
    );
    const querySnapshot = await getDocs(q);
    const comments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      data: doc.data(),
    }));
    return comments;
  } catch (error: any) {
    throw new Error("Error fetching comments:", error);
  }
}

export async function createComment(body: any, userId: any, campaignId: any) {
  try {
    const docRef = await addDoc(collection(db, "comments"), {
      body: body,
      userId: userId,
      campaignId: campaignId,
      likes: [],
      createdIn: Timestamp.now(),
    });

    console.log(docRef);

    const updatedComments = await getComments(campaignId);
    return updatedComments;
  } catch (error: any) {
    throw new Error("Error creating comment:", error);
  }
}
