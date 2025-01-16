"use client";

import { onAuthStateChanged } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { firebaseAuth } from "../../../../firebase.config";
import PageLoader from "@/components/UI/PageLoader";
import { useAuthState } from "react-firebase-hooks/auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

export default function AuthProvider({ children }: AuthProviderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [user] = useAuthState(firebaseAuth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, async (user) => {
      if (!user) {
        router.push(`/auth/login`);
      }
    });
    return () => unsubscribe();
  }, [router, pathname]);

  useEffect(() => {
    if(user?.email === "admin@hackathon.com") {
      router.push(`/auth/login`);
    }
  }, [user])

  console.log("AUTH PROVIDER USER", user?.email);

  return user && user?.email !== "admin@hackathon.com" ? (
    <>{children}</>
  ) : (
    <PageLoader />
  );
}
