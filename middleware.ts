import { NextResponse, NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });

  // If the user is not authenticated and trying to access a protected route
  if (!token && req.nextUrl.pathname !== '/login') {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // Allow requests if user is authenticated or if they are going to the login page
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Protect all routes except the login page
    '/((?!api|_next|static|login).*)',
  ],
};
