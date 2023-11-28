export default function Button({
  children,
  secondary,
  style,
}: {
  children: React.ReactNode;
  secondary?: boolean;
  style?: string;
}) {
  return (
    <button
      className={`rounded-full text-white flex items-center transition duration-150 justify-center py-[16px] px-[63px] w-full ${
        secondary
          ? "bg-green-600 hover:bg-green-500"
          : "bg-amber-600 hover:bg-amber-500"
      } ${style}`}
    >
      {children}
    </button>
  );
}
