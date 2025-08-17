// app/login/page.tsx
import { Suspense } from "react";
import LoginInner from "./login-inner";

// Оборачиваем в Suspense страницу, чтобы useSearchParams работал корректно на пререндере
export default function LoginPage() {
  return (
    <Suspense fallback={<div className="p-8">Загрузка…</div>}>
      <LoginInner />
    </Suspense>
  );
}

