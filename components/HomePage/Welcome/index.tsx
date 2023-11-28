import Image from "next/image";
import homeSalad from "@/public/home-salad.png";
import Button from "@/components/Button";

export default function Welcome() {
  return (
    <section className="bg-[#9FE2B6]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-10 w-full h-full items-center justify-center py-[188px]">
        <Image src={homeSalad} alt="Salad image" width={700} height={700} />
        <div>
          <h1 className="font-bold text-[80px] leading-[88px] mb-[60px]">
            Welcome to <span className="text-amber-600">delisiozo</span>
          </h1>
          <p className="text-[14px] inline-block mb-[122px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            autem cumque dolores facilis molestias mollitia nisi, numquam.
          </p>
          <div className="w-[245px]">
            <Button>See our menu</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
