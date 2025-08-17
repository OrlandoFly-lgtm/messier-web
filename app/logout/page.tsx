"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_role");
    router.replace("/login");
  }, [router]);

  return <p>Выходим…</p>;
}
