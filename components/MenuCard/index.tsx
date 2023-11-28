import Image from "next/image";
import Button from "../Button";
import StarRating from "../StarRating";

type MenuCardType = {
  image: string;
  title: string;
  rating: 1 | 2 | 3 | 4 | 5;
  description: string;
  price: number;
};

export default function MenuCard({
  price,
  description,
  image,
  rating,
  title,
}: MenuCardType) {
  return (
    <div className="p-[40px] bg-[#ECEAE8] rounded-[60px] max-w-[360px] flex flex-col items-center justify-between">
      <Image
        className="mb-[24px]"
        unoptimized
        src={image}
        alt={title}
        width={271}
        height={271}
      />
      <h3 className="mb-1 text-[30px] font-semibold">{title}</h3>
      <StarRating rating={rating} />
      <p className="inline-block mt-[15px] mb-[30px] text-[14px] text-center">
        {description}
      </p>
      <div className="flex items-center justify-between gap-[36px] h-[55px]">
        <p className="font-semibold text-[25px] leading-normal">${price}</p>
        <Button style="text-[16px] py-[10px] px-[30px]">Order now</Button>
      </div>
    </div>
  );
}
