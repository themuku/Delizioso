import Link from "next/link";

export default function LoginButton() {
  return (
    <Link
      className="text-[14px] font-semibold text-white rounded-full bg-[#3FA72F] hover:bg-[#52c940] flex items-center justify-center px-[35px] py-[15px] transition:bg duration-150"
      href={"auth/login"}
    >
      Login
    </Link>
  );
}
