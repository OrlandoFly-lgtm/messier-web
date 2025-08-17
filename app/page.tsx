import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen w-full relative flex items-center justify-center"
      // фон из /public/bg.jpg
      style={{
        backgroundImage: "url('/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* лёгкое затемнение для читаемости текста */}
      <div className="absolute inset-0 bg-black/35" />

      {/* контент по центру */}
      <div className="relative z-10 w-full max-w-5xl px-6">
        {/* Заголовок */}
        <h1
          className="text-center text-6xl md:text-7xl font-bold tracking-wide text-white"
          style={{ textShadow: "0 4px 24px rgba(0,0,0,0.55)" }}
        >
          Мессьер
        </h1>

        {/* Кнопки */}
        <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
          <Link
            href="/login?role=executor"
            className="px-6 py-3 rounded-lg border border-white/55 text-white font-semibold
                       bg-white/18 hover:bg-white/26 transition backdrop-blur-sm"
            style={{ boxShadow: "inset 0 2px 10px rgba(0,0,0,0.35)" }}
          >
            Зарегистрироваться как специалист
          </Link>

          <Link
            href="/login?role=client"
            className="px-6 py-3 rounded-lg border border-white/55 text-white font-semibold
                       bg-white/18 hover:bg-white/26 transition backdrop-blur-sm"
            style={{ boxShadow: "inset 0 2px 10px rgba(0,0,0,0.35)" }}
          >
            Зарегистрироваться как клиент
          </Link>
        </div>

        {/* Сабхедлайн снизу */}
        <p
          className="mt-16 text-center text-white/85 text-sm md:text-base"
          style={{ textShadow: "0 2px 14px rgba(0,0,0,0.5)" }}
        >
          B2B платформа с ручным отбором специалистов и решением задач для бизнеса
        </p>
      </div>
    </main>
  );
}
