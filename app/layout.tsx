import "./globals.css";

export const metadata = {
  title: "Messier",
  description: "Агентская модель CRM"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-zinc-50">{children}</body>
    </html>
  );
}
