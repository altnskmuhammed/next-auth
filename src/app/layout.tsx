"use client";

import { ReactNode } from "react";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface RootLayoutProps {
  children: ReactNode;
  session: Session | null;
}

export default function RootLayout({ children, session }: RootLayoutProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
