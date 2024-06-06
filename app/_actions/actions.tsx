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
  orderBy,
  documentId,
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
      createdAt: Timestamp.now(),
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
      uid: doc.id,
      ...doc.data(),
    }));
    return campaignsData;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
  }
}

export async function getRecommendations(recommendationsIds: any) {
  try {
    const q = query(
      collection(db, "campaigns"),
      where(documentId(), "in", recommendationsIds)
    );

    console.log(recommendationsIds);

    const querySnapshot = await getDocs(q);
    const campaignsData = querySnapshot.docs.map((doc) => ({
      uid: doc.id,
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
      where("campaignId", "==", campaignId),
      orderBy("createdAt", "desc")
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
          // userId: userDoc.id,

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
    const commentData = {
      body: body,
      userId: userId,
      campaignId: campaignId,
      likes: [],
      createdAt: Timestamp.now(),
    };
    const docRef = await addDoc(collection(db, "comments"), commentData);
    // const updatedComments = await getComments(campaignId);
    return { ...commentData, id: docRef.id };
  } catch (error: any) {
    throw new Error("Error creating comment:", error);
  }
}

export async function createCampaign(
  userId: any,
  title: any,
  pictureUrl: any,
  description: any,
  affectedRegion: any,
  type: any,
  goal: any,
  photos: any,
  isNonProfit: any,
  isCombu: any,
  isAd: any
) {
  try {
    const campaignData = {
      title: title,
      pictureUrl: pictureUrl,
      description: description,
      affectedRegion: affectedRegion,
      type: type,
      goal: parseInt(goal),
      photos: photos,
      isNonProfit: isNonProfit,
      isCombu: isCombu,
      isAd: isAd,
      raised: 0,
      likes: [],
      saves: [],
      shares: 0,
      userId: userId,
      createdAt: Timestamp.now(),
    };
    const docRef = await addDoc(collection(db, "campaigns"), campaignData);
    return { ...campaignData, id: docRef.id };
  } catch (error: any) {
    throw new Error("Error creating campaign:", error);
  }
}
