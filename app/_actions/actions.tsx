"use client";

import {
  collection,
  setDoc,
  getDoc,
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
      ...doc.data(),
    }));
    return campaignsData;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
  }
}

const getCommentUserData = async (userId: any) => {
  try {
    const userDoc = await getDoc(doc(db, "users", userId));
    return userDoc;
  } catch (error: any) {
    throw new Error("Error fetching comment creator: ", error);
  }
};

export async function getComments(campaignId: any) {
  try {
    const q = query(
      collection(db, "comments"),
      where("campaignId", "==", campaignId)
    );
    const querySnapshot = await getDocs(q);

    const comments = await Promise.all(
      querySnapshot.docs.map(async (comment) => {
        const userDoc = await getCommentUserData(comment.data().userId);
        if (!userDoc.exists()) {
          throw new Error("Error fetching comment creator");
        }
        return {
          id: comment.id,
          ...comment.data(),
          userId: userDoc.id,
          userName: userDoc.data().displayName,
          userPictureUrl: userDoc.data().pictureUrl,
        };
      })
    );
    console.log(comments);
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
    const updatedComments = await getComments(campaignId);
    return updatedComments;
  } catch (error: any) {
    throw new Error("Error creating comment:", error);
  }
}
