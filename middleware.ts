import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/dua-categories/1";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
