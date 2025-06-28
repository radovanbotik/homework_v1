import cart from "../../assets/cart.svg";

import { useCart } from "../../store/CartContext";
import { getItemCount } from "../../util/shoppingCart";

export function ShoppingButton({ ...props }) {
  const { cartItems, toggleCart, shoppingButtonRef } = useCart();
  const totalCount = getItemCount(cartItems);

  return (
    <button
      ref={shoppingButtonRef}
      id="shopping-button"
      className="inline-flex gap-2 items-center text-sm ml-auto z-50 top-0 right-0 text-white relative"
      onMouseDown={toggleCart}
      {...props}
    >
      <div className="relative pointer-events-none">
        <img src={cart} className="w-6 h-6" />
        <div className="absolute w-4 h-4  rounded-full bg-[#E60000] -bottom-1 -left-1 text-xs">{totalCount}</div>
      </div>
      <span className="pointer-events-none">Shopping Cart</span>
    </button>
  );
}
