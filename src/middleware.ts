import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const token = request.cookies.get("jwt");
  const signInURL = new URL("/auth/entrar", request.url);
  if (!token) {
    return NextResponse.rewrite(signInURL);
  }
}

export const config = {
  matcher: ["/perfil/", "/anotacao/:path*"],
};
