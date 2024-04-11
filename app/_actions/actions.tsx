"use client";

import {
  collection,
  setDoc,
  getDoc,
  doc,
  Timestamp,
  onSnapshot,
} from "firebase/firestore";

import { auth, db } from "../_config/firebase";

// export const createUser = () => {
//     const newUser = {
//         name:
//     }
// }
