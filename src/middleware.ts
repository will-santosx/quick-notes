import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt")?.value;
  const signInURL = new URL("/auth/entrar", request.url);
  if (!token) {
    return NextResponse.redirect(signInURL);
  }
}

export const config = {
  matcher: ["/perfil/"],
};
