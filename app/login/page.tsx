// app/login/page.tsx
"use client"; // This makes the component a Client Component

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-[#00003c] text-white">
      <h1 className="text-2xl mb-4">Login to Cinema Guru</h1>
      <button
        onClick={() => signIn("github")}
        className="px-4 py-2 bg-[#54F4D0] text-[#00003c] rounded hover:bg-[#1ED2AF]"
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
