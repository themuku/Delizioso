import Button from "@/components/Button";
import Image from "next/image";
import heroImage from "@/public/hero-image.png";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-2 max-w-[1200px] mx-auto px-[20px] items-center justify-center mb-[216px] mt-[166px]">
      <div>
        <p className="inline-block py-[10px] px-[35px] text-center rounded-full text-[#FF8A00] bg-orange-200 mb-[23px]">
          Restaurant
        </p>
        <h1 className="text-[80px] font-bold leading-[110%] mb-[30px]">
          Italian
          <br /> cuisine
        </h1>
        <p className="text-[20px] leading-[40px] inline-block mb-[77px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          assumenda dignissimos dolorem doloribus dolorum enim.
        </p>
        <div className="flex gap-[24px]">
          <Button>Order now</Button>
          <Button secondary>Reservation</Button>
        </div>
      </div>
      <Image width={700} height={600} src={heroImage} alt="salad" />
    </section>
  );
}
