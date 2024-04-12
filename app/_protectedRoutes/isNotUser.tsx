"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "../_contexts/AuthContext";

export default function IsNotUser({ children }: any) {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    console.log(user);
    if (user) {
      if (user.name) {
        router.push("/campaigns");
      }
    } else {
      router.push("/sign-in");
    }
  }, [user, router]);

  // Adjusted return statement: Render children only if the user is authenticated but does not have a name.
  return user && !user.name ? children : null;
}
