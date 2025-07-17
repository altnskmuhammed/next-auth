import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
  
      name?: string | null;
      email?: string | null;
      image?: string | null;

     
      roles?: string[];
    };
  }

  interface User {
    roles?: string[];
  }
  interface CustomProfile extends Profile {
  "https://dev-2ow5jb0r36svg5r3.eu.auth0.com/roles"?: string[];
}

}
