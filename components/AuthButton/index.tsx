"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  return (
    <button
      className="bg-amber-600 w-full border-amber-600 rounded-[10px] text-[14px] py-[19px] px-[186px] border-[1px] border-solid"
      type={"submit"}
    >
      Log in
    </button>
  );
};

const LoginGithub = () => {
  return (
    <button
      onClick={() =>
        signIn("github", { redirect: true }).then((response) =>
          console.log(response),
        )
      }
      className="flex w-full items-center justify-center gap-[16px] bg-white border-[1px] border-solid border-[#B6A38B] outline-none rounded-[10px] text-[14px] py-[15px] px-[186px]"
    >
      <FaGithub size={30} />
      Log in with Google
    </button>
  );
};

const Signup = () => {
  return (
    <button
      className="bg-amber-600 w-full border-amber-600 rounded-[10px] text-[14px] py-[19px] px-[186px] border-[1px] border-solid"
      type={"submit"}
    >
      Sign up
    </button>
  );
};

const SignupGithub = () => {
  return (
    <button
      onClick={() =>
        signIn("github").then((res) =>
          res?.ok ? redirect("http://localhost:3000/home") : null,
        )
      }
      className="flex w-full items-center justify-center gap-[16px] bg-white border-[1px] border-solid border-[#B6A38B] outline-none rounded-[10px] text-[14px] py-[15px] px-[186px]"
      type={"submit"}
    >
      <FaGithub size={30} />
      Sign up with Github
    </button>
  );
};

export default { Login, LoginGithub, SignupGithub, Signup };
