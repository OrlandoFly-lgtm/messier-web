import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full relative flex items-center justify-center"
      // Используем файл из /public — он доступен по /bg.jpg
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* затемнение фона для читабельности */}
      <div className="absolute inset-0 bg-black/30" />

      {/* карточка по центру */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white/90 backdrop-blur rounded-2xl shadow-xl text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-wide text-zinc-900">Мессьер</h1>
        <p className="text-zinc-700">Выберите вход</p>

        <div className="flex flex-col gap-4">
          <Link
            href="/login?role=client"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-white font-semibold shadow hover:bg-blue-700 transition"
          >
            Вход для клиента
          </Link>

          <Link
            href="/login?role=executor"
            className="w-full rounded-lg bg-green-600 px-4 py-3 text-white font-semibold shadow hover:bg-green-700 transition"
          >
            Вход для исполнителя
          </Link>
        </div>
      </div>
    </main>
  );
}
