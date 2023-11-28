import Image from "next/image";

interface ChefCard {
  image: string;
  chefName: string;
  role: string;
}

export default function ChefCard({ chefName, role, image }: ChefCard) {
  return (
    <div className="max-h-[719px] max-w-[344px] flex flex-col items-center">
      <Image
        unoptimized
        className="rounded-[50px] mb-[40px]"
        src={image}
        alt={role}
        width={1000}
        height={1000}
      />
      <h4 className="text-[25px] font-semibold leading-[50px] mb-[30px]">
        {chefName}
      </h4>
      <p className="text-[#A08D76] leading-[50px] text-[25px]">{role}</p>
    </div>
  );
}
