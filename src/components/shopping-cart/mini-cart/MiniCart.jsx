import { Card } from "../../ui/Card";
import { useCart } from "../../../store/CartContext";
import { getItemCount, getTotal } from "../../../util/shoppingCart";
import { cn } from "../../../util/cn";
import { Triangle } from "../../ui/Triangle";
import { MiniCartWithItems } from "./MiniCartWithItems";
import { MiniCartNoItems } from "./MiniCartNoItems";

export function MiniCart() {
  const { cartItems, showCart, anchorCoordinates } = useCart();
  const totalPrice = getTotal(cartItems);
  const totalCount = getItemCount(cartItems);
  const hasItems = cartItems.length !== 0;

  return (
    <Card
      id="cart"
      className={cn("bg-white w-72 text-black z-50 absolute top-14 rounded-sm ", showCart ? "block" : "hidden")}
      onMouseDown={e => e.stopPropagation()}
      style={{ right: anchorCoordinates.right }}
    >
      <Triangle />
      {hasItems ? (
        <MiniCartWithItems totalCount={totalCount} totalPrice={totalPrice} cartItems={cartItems} />
      ) : (
        <MiniCartNoItems />
      )}
    </Card>
  );
}
