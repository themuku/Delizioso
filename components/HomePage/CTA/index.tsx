import Button from "@/components/Button";
import picture from "../../../public/cta-image.jpg";

export default function CTA() {
  "use client";
  return (
    <section className="py-[250px]">
      <div
        style={{
          backgroundImage: `url(${picture.src})`,
          width: "1150px",
          height: "588px",
        }}
        className="bg-cover h-[550px] w-[1100px] flex flex-col items-center justify-center mx-auto rounded-[120px]"
      >
        <h1 className="text-white text-[80px] font-bold leading-[160px] cta">
          we are open from
        </h1>
        <h2 className="text-white text-[40px] leading-[80px] font-semibold cta">
          Monday-Sunday
        </h2>
        <div className="text-white flex flex-col items-center cta text-[20px] leading-[40px] tracking-widest font-normal mb-[50px]">
          <p className="text-white">Launch: Mon-Sun: 11:00am - 02:00pm</p>
          <p className="text-white">Dinner: Sunday: 04:00pm - 08:00pm</p>
          <p className="text-white self-end">04:00pm - 09:00pm</p>
        </div>
        <div className="flex gap-[24px]">
          <Button>Order now</Button>
          <Button white>Reservation</Button>
        </div>
      </div>
    </section>
  );
}
