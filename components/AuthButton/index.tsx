import { FcGoogle } from "react-icons/fc";

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

const LoginGoogle = () => {
  return (
    <button className="flex w-full items-center justify-center gap-[16px] bg-white border-[1px] border-solid border-[#B6A38B] outline-none rounded-[10px] text-[14px] py-[15px] px-[186px]">
      <FcGoogle size={30} />
      Log in with Google
    </button>
  );
};

const Signup = () => {
  return <button type={"submit"}>Sign up</button>;
};

const SignupGoogle = () => {
  return <button type={"submit"}>Sign up with Google</button>;
};

export default { Login, LoginGoogle, SignupGoogle, Signup };
