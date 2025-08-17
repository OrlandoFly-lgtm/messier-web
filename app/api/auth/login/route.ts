import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const { email, password } = body;

  const users = [
    { email: "admin@messier.ru", role: "ADMIN" },
    { email: "manager@messier.ru", role: "MANAGER" },
    { email: "client@messier.ru", role: "CLIENT" }
  ];

  const user = users.find(u => u.email === email);
  if (!user || !password) {
    return NextResponse.json({ message: "Неверные данные" }, { status: 401 });
  }

  const accessToken = Buffer.from(`${user.email}:${user.role}:${Date.now()}`).toString("base64");
  return NextResponse.json({ accessToken, role: user.role });
}
