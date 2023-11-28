import MenuCard from "@/components/MenuCard";

export default function OurMenu() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <h1 className="text-center text-[80px] leading-[200px] mb-[60px]">
        Our popular menu
      </h1>
      <ul className="flex items-center justify-between text-center mb-[77px]">
        <li className="rounded-full py-[17px] px-[55px] bg-[#D0CCC7] text-black hover:bg-[#311F09] hover:text-white transition duration-100">
          All category
        </li>
        <li className="rounded-full py-[17px] px-[55px] bg-[#D0CCC7] text-black hover:bg-[#311F09] hover:text-white transition duration-100">
          Dinner
        </li>
        <li className="rounded-full py-[17px] px-[55px] bg-[#D0CCC7] text-black hover:bg-[#311F09] hover:text-white transition duration-100">
          Lunch
        </li>
        <li className="rounded-full py-[17px] px-[55px] bg-[#D0CCC7] text-black hover:bg-[#311F09] hover:text-white transition duration-100">
          Dessert
        </li>
        <li className="rounded-full py-[17px] px-[55px] bg-[#D0CCC7] text-black hover:bg-[#311F09] hover:text-white transition duration-100">
          Drink
        </li>
      </ul>
      <div className="grid grid-cols-3 gap-[40px] mb-[88px]">
        <MenuCard
          rating={4}
          title="Spaghetti"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem
        beatae dolores mollitia suscipit voluptatem."
          image="https://static.vecteezy.com/system/resources/previews/025/065/138/original/spaghetti-with-ai-generated-free-png.png"
          price={12.05}
        />
        <MenuCard
          rating={4}
          title="Spaghetti"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem
        beatae dolores mollitia suscipit voluptatem."
          image="https://static.vecteezy.com/system/resources/previews/025/065/138/original/spaghetti-with-ai-generated-free-png.png"
          price={12.05}
        />
        <MenuCard
          rating={4}
          title="Spaghetti"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem
        beatae dolores mollitia suscipit voluptatem."
          image="https://static.vecteezy.com/system/resources/previews/025/065/138/original/spaghetti-with-ai-generated-free-png.png"
          price={12.05}
        />
        <MenuCard
          rating={4}
          title="Spaghetti"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam autem
        beatae dolores mollitia suscipit voluptatem."
          image="https://static.vecteezy.com/system/resources/previews/025/065/138/original/spaghetti-with-ai-generated-free-png.png"
          price={12.05}
        />
      </div>
      <div className="flex items-center justify-center mx-auto mb-[200px]">
        <button className="border-none outline-none bg-[#311F09] hover:bg-white stroke-white hover:fill-[#311F09] rounded-[15px] w-[55px] h-[55px] flex items-center justify-center text-white] transition duration-150">
          <svg
            className="hover:stroke-[#311F09] transition duration-150"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.7932 17.4629L20.802 28.4541L31.7932 39.4453"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <ul className="flex items-center justify-center gap-[15px] mx-[30px]">
          <li className="py-[11.5px] bg-amber-100 w-[55px] hover:bg-amber-200 h-[55px] rounded-[15px] leading-normal flex items-center justify-center text-center hover:text-amber-200 transition duration-150">
            <p className="text-[16px] text-amber-600">1</p>
          </li>
          <li className="py-[11.5px] bg-amber-100 w-[55px] hover:bg-amber-200 h-[55px] rounded-[15px] leading-normal flex items-center justify-center text-center hover:text-amber-200 transition duration-150">
            <p className="text-[16px] text-amber-600">2</p>
          </li>
          <li className="py-[11.5px] bg-amber-100 w-[55px] hover:bg-amber-200 h-[55px] rounded-[15px] leading-normal flex items-center justify-center text-center hover:text-amber-200 transition duration-150">
            <p className="text-[16px] text-amber-600">3</p>
          </li>
          <li className="py-[11.5px] w-[55px] h-[55px] rounded-[15px] leading-normal flex items-center justify-center text-center hover:bg-gray-100 transition duration-150">
            <svg
              width="24"
              height="6"
              viewBox="0 0 24 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3.32861" cy="3.4541" r="2.5" fill="#B7A28B" />
              <circle cx="12" cy="3.4541" r="2.5" fill="#B7A28B" />
              <circle cx="20.6714" cy="3.4541" r="2.5" fill="#B7A28B" />
            </svg>
          </li>
        </ul>
        <button className="border-none outline-none bg-[#311F09] hover:bg-white stroke-white hover:fill-[#311F09] rounded-[15px] w-[55px] h-[55px] flex items-center justify-center text-white] transition duration-150">
          <svg
            className="hover:stroke-[#311F09] rotate-180 transition duration-150"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M31.7932 17.4629L20.802 28.4541L31.7932 39.4453"
              stroke=""
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}
