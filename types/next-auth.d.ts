import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      /** Varsayılan NextAuth user property'leri */
      name?: string | null;
      email?: string | null;
      image?: string | null;

      /** Senin eklediğin roller */
      roles?: string[];
    };
  }

  interface User {
    roles?: string[];
  }
}
