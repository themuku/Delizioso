export default function Logo({ navlogo }: { navlogo?: boolean }) {
  return (
    <div className="flex items-center gap-[18px]">
      <div className="flex items-center justify-center bg-amber-600 w-[51px] h-[51px] rounded-full">
        <span>D</span>
      </div>
      {navlogo && (
        <div>
          Delizi<span className="text-amber-600">oso</span>
        </div>
      )}
    </div>
  );
}
