import Logo from "./Logo";
import NavLinks from "@/components/Navigation/NavLinks";
import Cart from "@/components/Navigation/Cart";
import LoginButton from "./LoginButton";

export default function Navigation() {
  return (
    <nav className="bg-transparent py-[51px] w-full flex justify-center items-center">
      <div className="w-[1440px] flex items-center justify-center">
        <div className="mr-[80px] flex gap-[99px] items-center ">
          <Logo navlogo />
          <NavLinks />
        </div>
        <div className="flex gap-[25px]">
          <Cart cartItem={1} />
          <LoginButton />
        </div>
      </div>
    </nav>
  );
}
