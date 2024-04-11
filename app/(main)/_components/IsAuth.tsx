"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAuth } from "../../_contexts/AuthContext";

export default function IsAuth({ children }: any) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  if (!user) {
    return router.push("/sign-in");
  }

  return user.name ? children : router.push("/create-account");
}
