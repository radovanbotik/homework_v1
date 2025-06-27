import cart from "../../assets/cart.svg";

import { useCart } from "../../store/CartContext";
import { getItemCount } from "../../util/shoppingCart";

export function ShoppingButton({ onMouseDown, ...props }) {
  const { cartItems } = useCart();
  const totalCount = getItemCount(cartItems);

  return (
    <button className="inline-flex gap-2 items-center text-sm ml-auto" onMouseDown={onMouseDown} {...props}>
      <div className="relative">
        <img src={cart} className="w-6 h-6" />
        <div className="absolute w-4 h-4  rounded-full bg-[#E60000] -bottom-1 -left-1 text-xs">{totalCount}</div>
      </div>
      <span>Shopping Cart</span>
    </button>
  );
}
