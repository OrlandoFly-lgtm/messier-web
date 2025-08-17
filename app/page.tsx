import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl p-8">
      <h1 className="text-3xl font-bold">Messier</h1>
      <p className="mt-2 text-zinc-600">Витрина проекта. Вход —</p>
      <Link href="/login" className="inline-block mt-3 underline">
        Перейти на /login
      </Link>
    </main>
  );
}
