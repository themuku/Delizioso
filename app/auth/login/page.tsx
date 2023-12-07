"use client";
import Input from "@/components/Inputs";
import Image from "next/image";
import Logo from "@/components/Navigation/Logo";
import Link from "next/link";
import AuthButton from "@/components/AuthButton";

export default function Login() {
  return (
    <div className="grid w-full h-full grid-cols-2 overflow-hidden">
      <form className="flex flex-col justify-start px-[40px] py-[20px]">
        <div className="mb-[30px]">
          <Logo />
        </div>
        <h1 className="text-[30px] mb-[10px] font-bold">Login</h1>
        <p className="mb-[20px] inline-block">
          Don&apos;t have an account?{" "}
          <Link className="text-[#0094FF]" href={"/auth/signup"}>
            Sign Up
          </Link>
        </p>
        <div className="mb-[20px]">
          <Input.Email />
        </div>
        <div className="mb-[20px]">
          <Input.Password />
        </div>
        <div className="flex justify-between items-center mb-[20px]">
          <Input.Checkbox />
          <Link href={"/"}>Forget password?</Link>
        </div>
        <AuthButton.Login />
        <div className="mb-[30px] mt-[20px]">
          <AuthButton.LoginGithub />
        </div>
        <p className="text-[#C7BFB6] text-center">
          Copyright &copy; 2022 Delizioso
        </p>
      </form>
      <div>
        <Image
          className={`w-full h-full -translate-y-4`}
          src="https://images.unsplash.com/photo-1554520735-0a6b8b6ce8b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="pancake"
          unoptimized
          width={800}
          height={100}
        />
      </div>
    </div>
  );
}
