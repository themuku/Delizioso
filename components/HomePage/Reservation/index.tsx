import Image from "next/image";
import picture from "@/public/Picture.png";
import picture1 from "@/public/Picture-1.png";
import picture2 from "@/public/Picture-2.png";
import Button from "@/components/Button";

export default function Reservation() {
  return (
    <section className="flex justify-center items-center bg-[#FFF4E7] py-[86px] mb-[175px]">
      <div className="grid grid-cols-2 items-center justify-between gap-[100px]">
        <div className="relative">
          <Image src={picture} alt="Table picture" width={780} height={883} />
          <Image
            className="absolute top-0 right-0"
            src={picture1}
            alt="Restaurant picture"
            width={181}
            height={181}
          />
          <Image
            className="absolute -bottom-10 left-0"
            src={picture2}
            alt="Another restaurant picture"
            width={181}
            height={181}
          />
        </div>
        <div className="max-w-[433px] justify-self-auto">
          <h1 className="text-yellow-950 text-7xl font-bold font-['Tinos'] leading-[80px] max-w-[443px] mb-[50px]">
            Let&apos;s reserve{" "}
            <span className="text-amber-500 text-7xl font-bold font-['Tinos'] leading-10">
              a table
            </span>
          </h1>
          <p className="inline-block mb-[132px] text-stone-700 text-xl font-normal font-['Poppins'] leading-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam{" "}
          </p>
          <Button style="max-w-[232px]">Reservation</Button>
        </div>
      </div>
    </section>
  );
}
