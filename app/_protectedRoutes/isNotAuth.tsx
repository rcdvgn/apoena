"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../_contexts/AuthContext";

export default function IsNotAuth({ children }: any) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
    if (user) {
      if (user.name) {
        router.push("/campaigns");
      } else {
        router.push("/create-account");
      }
    }
  }, [user, router]);

  return !user ? children : null;
}
