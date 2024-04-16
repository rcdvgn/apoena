"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../_contexts/AuthContext";

export default function IsAuth({ children }: any) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
    if (!user) {
      router.push("/sign-in");
    } else if (!user.name) {
      router.push("/onboarding");
    }
  }, [user, router]);

  return user?.name ? children : null;
}
