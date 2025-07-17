import NextAuth, { CustomProfile } from "next-auth";
import Auth0Provider from "next-auth/providers/auth0";
import { NextAuthOptions } from "next-auth";

const authOptions: NextAuthOptions = {
  debug: true,

  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER!,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
callbacks: {
  async jwt({ token, account, profile }) {
    const namespace = "https://dev-2ow5jb0r36svg5r3.eu.auth0.com";
   if (account && profile) {
    console.log("account=",account,profile);
    
  const roles = (profile as CustomProfile)[`${namespace}/roles`];
  token.roles = Array.isArray(roles) ? roles : ["user"];
}
    return token;
  },
async session({ session, token }) {
  if (session.user) {
    // token.roles 'unknown' olabilir, bunu string[] mi diye kontrol et
    if (Array.isArray(token.roles)) {
      session.user.roles = token.roles;
    } else {
      // roles yoksa veya tip uymuyorsa default atama yapabilirsin
      session.user.roles = [];
    }
  }
  return session;
}

},

  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
