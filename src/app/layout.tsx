
import "./globals.css";
import { ReactNode } from "react";

import SessionWrapper from "@/components/SessionWrapper";

export const metadata = {
  title: "My App",
  description: "NextAuth + Auth0",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SessionWrapper session={null}>
          {children}
        </SessionWrapper>
      </body>
    </html>
  );
}
