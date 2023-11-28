type CartType = {
  cartItem?: number;
};

export default function Cart({ cartItem }: CartType) {
  let formattedCartItemQuantity: string;

  if (cartItem && cartItem >= 100) formattedCartItemQuantity = "99+";
  else formattedCartItemQuantity = `${cartItem}`;

  return (
    <div className="w-[53px] h-[53px] bg-[#D0CCC7] hover:bg-[#bbb7b3] transition:bg duration-150 rounded-full text flex items-center justify-center relative">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.5 5.92H19.7558C20.3947 5.92 20.8698 6.51108 20.7324 7.13511L19.6915 11.8604C19.2876 13.6941 17.6628 15 15.7852 15H9.54507C8.07693 15 6.82447 13.9375 6.58518 12.489L5.5 5.92ZM5.5 5.92L4.96302 4.35201C4.68606 3.54329 3.92573 3 3.0709 3H3"
          stroke="#311F09"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M18 18H7.5C6.67157 18 6 17.3284 6 16.5V16.5C6 15.6716 6.67157 15 7.5 15H10"
          stroke="#311F09"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="8" cy="20" r="1.25" stroke="#311F09" strokeWidth="1.5" />
        <circle cx="16" cy="20" r="1.25" stroke="#311F09" strokeWidth="1.5" />
      </svg>
      {cartItem && (
        <span className="absolute top-[8px] right-[3px] flex items-center justify-center w-[16px] h-[16px] bg-[#FF3838] rounded-full">
          <span className="text-[8px]">{formattedCartItemQuantity}</span>
        </span>
      )}
    </div>
  );
}
