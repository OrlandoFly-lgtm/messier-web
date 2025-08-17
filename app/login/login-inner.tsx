// app/login/login-inner.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginInner() {
  const sp = useSearchParams();
  const roleParam = (sp.get("role") || "").toLowerCase(); // "client" | "executor" | ""
  const heading =
    roleParam === "client" ? "Вход для клиента"
    : roleParam === "executor" ? "Вход для специалиста"
    : "Вход";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "Ошибка входа");
      localStorage.setItem("access_token", data.accessToken);
      localStorage.setItem(
        "user_role",
        roleParam === "client" ? "CLIENT" : roleParam === "executor" ? "EXECUTOR" : data.role || "CLIENT"
      );
      setMsg("Успех. Откройте /dashboard");
    } catch (err: any) {
      setMsg(err?.message || "Ошибка входа");
    }
  }

  return (
    <main className="mx-auto max-w-md p-8">
      <h1 className="text-2xl font-semibold">{heading}</h1>
      <form onSubmit={onSubmit} className="mt-6 space-y-4">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border p-2 rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Пароль"
          className="w-full border p-2 rounded"
        />
        <button className="w-full border p-2 rounded">Войти</button>
      </form>
      <p className="mt-4 text-sm text-zinc-600">{msg}</p>
      <div className="mt-4 text-xs text-zinc-500">
        Демо: admin@messier.ru / manager@messier.ru / client@messier.ru (пароль — любой)
      </div>
    </main>
  );
}
