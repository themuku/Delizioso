import { Metadata } from "next";
import HeroSection from "../../components/HomePage/HeroSection";
import Welcome from "../../components/HomePage/Welcome";
import OurMenu from "../../components/HomePage/OurMenu";
import Reservation from "@/components/HomePage/Reservation";
import OurChefs from "@/components/HomePage/OurChefs";
import Index from "@/components/HomePage/OurCustomers";
import CTA from "@/components/HomePage/CTA";

export const metadata: Metadata = {
  title: "Delizioso | Home",
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Welcome />
      <OurMenu />
      <Reservation />
      <OurChefs />
      <Index />
      <CTA />
    </main>
  );
}
