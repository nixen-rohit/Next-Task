"use client";

import { useAuth } from "@/components/AuthProvider";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Home from "@/components/Home";

export default function Page() {
  const { user }: any = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === undefined) return; // still loading

    if (!user) {
      router.replace("/auth/login");
    }
  }, [user, router]);

  if (user === undefined) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <Home />
    </>
  );
}
