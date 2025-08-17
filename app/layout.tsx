import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Messier",
  description: "Агентская модель CRM"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-zinc-50">
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-4xl p-4 flex gap-6">
            <Link href="/" className="font-medium">Главная</Link>
            <Link href="/login">Вход</Link>
            <Link href="/dashboard">Кабинет</Link>
            <Link href="/logout">Выход</Link>
          </nav>
        </header>
        <div className="mx-auto max-w-4xl p-6">{children}</div>
      </body>
    </html>
  );
}
