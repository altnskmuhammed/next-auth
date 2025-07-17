import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import type { NextRequestWithAuth } from "next-auth/middleware";


interface CustomToken {
  name?: string;
  email?: string;
  picture?: string;
  roles?: string[];
}

export default withAuth(
  function middleware(req: NextRequestWithAuth) {
    const token = req.nextauth.token as CustomToken;
    const pathname = req.nextUrl.pathname;

 
    const isAdminRoute = pathname.startsWith("/admin");
    const isAdmin = token?.roles?.includes("admin");

    if (isAdminRoute && !isAdmin) {
      return NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => {
        
        return !!token;
      },
    },
  }
);


export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};
