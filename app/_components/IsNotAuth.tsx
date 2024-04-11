"use client";

import React, { useState, useEffect } from "react";

import { useAuth } from "../_contexts/AuthContext";

import { useRouter } from "next/router";

export default function IsNotAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  const { user } = useAuth();

  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   if (user) {
  //     if (user.name) {
  //       router.push("/campaigns");
  //     } else {
  //       router.push("/create-account");
  //     }
  //   }
  //   setLoading(false);
  // }, [user]);

  if (!user) {
    console.log("user non existent. returning non auth route");
    return children;
  } else {
    console.log("user exists. returning protected route");
    return user.name
      ? router.push("/campaigns")
      : router.push("/create-account");
  }
}
