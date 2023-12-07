import ChefCard from "./ChefCard";
import Button from "@/components/Button";

export default function OurChefs() {
  return (
    <section className="flex items-center justify-center max-w-[1200px] mx-auto flex-col mb-[271px]">
      <h1 className="text-[80px] leading-[160px] font-bold mb-[135px]">
        Our greatest chef
      </h1>
      <div className="grid grid-cols-3 gap-8 mb-[150px]">
        <ChefCard
          image="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          chefName="Betran Komar"
          role="Head Chef"
        />
        <ChefCard
          image="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          chefName="Betran Komar"
          role="Head Chef"
        />
        <ChefCard
          image="https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          chefName="Betran Komar"
          role="Head Chef"
        />
      </div>
      <Button style="max-w-[235px]">View all</Button>
    </section>
  );
}
