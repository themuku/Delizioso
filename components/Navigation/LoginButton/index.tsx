"use client";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <div
        onClick={() => {
          signOut().then((res) => null);
        }}
        className="text-[14px] cursor-pointer font-semibold text-white rounded-full bg-[#3FA72F] hover:bg-[#52c940] flex items-center justify-center px-[35px] py-[15px] transition:bg duration-150"
      >
        Sign out
      </div>
    );
  } else {
    return (
      <Link
        className="text-[14px] font-semibold text-white rounded-full bg-[#3FA72F] hover:bg-[#52c940] flex items-center justify-center px-[35px] py-[15px] transition:bg duration-150"
        href={"auth/login"}
      >
        Login
      </Link>
    );
  }
}
