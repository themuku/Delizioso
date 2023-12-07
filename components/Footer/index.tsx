import Logo from "@/components/Navigation/Logo";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-[149px] pb-[74px] bg-[#311F09] px-[164px] text-white">
      <div className="mb-[90px] flex justify-around hover:text-gray-300 transition duration-150">
        <div className="flex flex-col w-[350px]">
          <Logo style="text-white" navlogo />
          <p className="text-white text-[20px] leading-[40px] inline-block mt-[45px] max-w-[350px]">
            Viverra gravida morbi egestas facilisis tortor netus non duis
            tempor.
          </p>
          <div className="flex mt-[39px] gap-[30px]">
            <div
              style={{ width: 60, height: 60 }}
              className="rounded-full flex items-center justify-center bg-gray-300"
            >
              <FaTwitter style={{ fill: "black", width: 30, height: 30 }} />
            </div>
            <div
              style={{ width: 60, height: 60 }}
              className="rounded-full flex items-center justify-center bg-gray-300"
            >
              <FaInstagram style={{ fill: "black", width: 30, height: 30 }} />
            </div>
            <div
              style={{ width: 60, height: 60 }}
              className="rounded-full flex items-center justify-center bg-gray-300"
            >
              <FaFacebookF style={{ fill: "black", width: 30, height: 30 }} />
            </div>
          </div>
        </div>
        <div className="flex gap-[70px]">
          <ul className="flex flex-col gap-[15px]">
            <h2 className="mb-[10px] text-amber-600 text-[25px] font-semibold leading-[50px]">
              Page
            </h2>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              Home
            </li>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              Menu
            </li>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              Order online
            </li>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              Catering
            </li>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              Reservation
            </li>
          </ul>
          <ul className="flex flex-col gap-[15px]">
            <h2 className="mb-[10px] text-amber-600 text-[25px] font-semibold leading-[50px]">
              Information
            </h2>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              About us
            </li>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              Testimonials
            </li>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              Event
            </li>
          </ul>
          <ul className="flex flex-col gap-[15px]">
            <h2 className="mb-[10px] text-amber-600 text-[25px] font-semibold leading-[50px]">
              Get in touch
            </h2>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] max-w-[280px] hover:text-gray-300 transition duration-150">
              3247 Johnson Ave, Bronx, NY 10463, Amerika Serikat
            </li>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              delizioso@gmail.com
            </li>
            <li className="cursor-pointer text-white text-[20px] leading-[40px] hover:text-gray-300 transition duration-150">
              +123 4567 8901
            </li>
          </ul>
        </div>
      </div>
      <p className="text-white text-center text-[20px]">
        Copyright &copy; 2022 Delizioso
      </p>
    </footer>
  );
}
