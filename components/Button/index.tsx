export default function Button({
  children,
  secondary,
  style,
  white,
}: {
  children: React.ReactNode;
  secondary?: boolean;
  style?: string;
  white?: boolean;
}) {
  return (
    <button
      className={`rounded-full flex items-center transition duration-150 justify-center py-[16px] px-[63px] w-full ${
        white
          ? "bg-white text-[#311F09] hover:bg-[#311F09] hover:text-white"
          : secondary
            ? "bg-green-600 hover:bg-green-500 text-white"
            : "bg-amber-600 hover:bg-amber-500 text-white"
      } ${style}`}
    >
      {children}
    </button>
  );
}
