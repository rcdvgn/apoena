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
      if (user.displayName) {
        router.push("/campaigns");
      } else {
        router.push("/onboarding");
      }
    }
  }, [user, router]);

  return !user ? children : null;
}
