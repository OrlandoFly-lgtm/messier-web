"use client";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    setToken(localStorage.getItem("access_token"));
    setRole(localStorage.getItem("user_role"));
  }, []);

  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-2xl font-semibold">Личный кабинет</h1>
      <p className="mt-2 text-sm text-zinc-600">Роль: <b>{role ?? "гость"}</b></p>
      <p className="mt-2 text-sm text-zinc-600">
        Токен: {token ? token.slice(0, 28) + "..." : "нет"}
      </p>
    </main>
  );
}
