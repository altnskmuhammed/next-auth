import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { NextRequestWithAuth } from "next-auth/middleware";

// Custom token tipi tanımı
interface CustomToken {
  name?: string;
  email?: string;
  picture?: string;
  roles?: string[];
}

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const token = req.nextauth.token as CustomToken;
    const isAdmin = token?.roles?.includes("admin");

    if (req.nextUrl.pathname.startsWith("/admin") && !isAdmin) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
