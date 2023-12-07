import Image from "next/image";

export default function Index() {
  return (
    <section>
      <div className="bg-[#ECEAE8] flex items-center py-[120px] flex-col relative">
        <h1 className="text-[80px] leading-[160px] font-bold text-center mb-[57px]">
          Our customers says
        </h1>
        <div className="max-w-[261px] max-h-[261px] overflow-hidden rounded-full mb-[40px]">
          <Image
            className="rounded-full"
            src="https://cdn.britannica.com/15/218215-050-193E7ED1/English-actor-Jason-Statham-2016.jpg"
            alt="Jason Statham"
            width={261}
            height={261}
            unoptimized
          />
        </div>
        <h3 className="text-[30px] leading-[60px] font-semibold">
          Jason Statham
        </h3>
        <p className="text-[20px] leading-[40px]">Actor</p>
        <blockquote className="flex flex-col justify-center items-center mt-[90px] mb-[108px]">
          <div className="max-w-[524px] text-center leading-[40px] text-[20px] relative">
            <div className="self-start text-[80px] font-bold absolute -top-[50px] -left-[50px]">
              &#x275D;
            </div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
            beatae culpa dolores eaque et excepturi, exercitationem iure labore
            mollitia.
            <div className="self-end text-[80px] font-bold absolute -bottom-[50px] -right-[50px]">
              &#x275E;
            </div>
          </div>
        </blockquote>
        <div className="flex items-center relative">
          <div className="max-w-[65px] max-h-[65px] rounded-full overflow-hidden absolute -top-[50px] -left-[80px]">
            <Image
              className="rounded-full"
              src="https://images.mubicdn.net/images/cast_member/25100/cache-2388-1688754259/image-w856.jpg"
              alt="Jason Statham"
              width={65}
              height={65}
              unoptimized
            />
          </div>
          <div className="flex justify-center h-[200px] gap-[33px]">
            <div className="max-w-[105px] max-h-[105px] rounded-full overflow-hidden self-start">
              <Image
                className="rounded-full"
                src="https://images.mubicdn.net/images/cast_member/25100/cache-2388-1688754259/image-w856.jpg"
                alt="Jason Statham"
                width={105}
                height={105}
                unoptimized
              />
            </div>
            <div className="flex self-end gap-[20px] items-center">
              <div className="max-w-[125px] max-h-[125px] rounded-full overflow-hidden">
                <Image
                  className="rounded-full"
                  src="https://images.mubicdn.net/images/cast_member/25100/cache-2388-1688754259/image-w856.jpg"
                  alt="Jason Statham"
                  width={125}
                  height={125}
                  unoptimized
                />
              </div>
              <div className="max-w-[155px] max-h-[155px] rounded-full overflow-hidden relative">
                <div>
                  <div className="w-[200px] h-[200px] bg-amber-600 rounded-full">
                    <Image
                      className="rounded-full"
                      src="https://images.mubicdn.net/images/cast_member/25100/cache-2388-1688754259/image-w856.jpg"
                      alt="Jason Statham"
                      width={155}
                      height={155}
                      unoptimized
                    />
                  </div>
                </div>
              </div>
              <div className="max-w-[125px] max-h-[125px] rounded-full overflow-hidden">
                <Image
                  className="rounded-full"
                  src="https://images.mubicdn.net/images/cast_member/25100/cache-2388-1688754259/image-w856.jpg"
                  alt="Jason Statham"
                  width={125}
                  height={125}
                  unoptimized
                />
              </div>
            </div>
            <div className="max-w-[105px] max-h-[105px] rounded-full overflow-hidden self-start">
              <Image
                className="rounded-full"
                src="https://images.mubicdn.net/images/cast_member/25100/cache-2388-1688754259/image-w856.jpg"
                alt="Jason Statham"
                width={105}
                height={105}
                unoptimized
              />
            </div>
          </div>

          <div className="max-w-[65px] max-h-[65px] rounded-full overflow-hidden absolute -top-[50px] -right-[80px]">
            <Image
              className="rounded-full"
              src="https://images.mubicdn.net/images/cast_member/25100/cache-2388-1688754259/image-w856.jpg"
              alt="Jason Statham"
              width={65}
              height={65}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
