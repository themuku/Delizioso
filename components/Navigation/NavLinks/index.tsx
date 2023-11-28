"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-[45px]">
      <li>
        <Link
          className={`${
            pathname === "/" ? "text-amber-600" : ""
          } hover:text-amber-600 transition:text duration-150`}
          href={"/"}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === "/menu" ? "text-amber-600" : ""
          } hover:text-amber-600 transition:text duration-150`}
          href={"/menu"}
        >
          Menu
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === "/about" ? "text-amber-600" : ""
          } hover:text-amber-600 transition:text duration-150`}
          href={"/about"}
        >
          About us
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === "/order" ? "text-amber-600" : ""
          } hover:text-amber-600 transition:text duration-150`}
          href={"/order"}
        >
          Order online
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === "/reservation" ? "text-amber-600" : ""
          } hover:text-amber-600 transition:text duration-150`}
          href={"/reservation"}
        >
          Reservation
        </Link>
      </li>
      <li>
        <Link
          className={`${
            pathname === "/contact" ? "text-amber-600" : ""
          } hover:text-amber-600 transition:text duration-150`}
          href={"/contact"}
        >
          Contact us
        </Link>
      </li>
    </ul>
  );
}
