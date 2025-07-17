"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {session ? (
        <>
          <p>Hoş geldin, {session.user?.name}</p>
          <button
            onClick={() => signOut()}
            className="mt-4 bg-red-500 px-4 py-2 rounded text-white"
          >
            Çıkış Yap
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn("auth0")}
          className="bg-blue-500 px-4 py-2 rounded text-white"
        >
          Giriş Yap
        </button>
      )}
    </div>
  );
}
