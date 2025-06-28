import { Button } from "../ui/Button";
import { useCart } from "../../store/CartContext";

export function CheckoutItemButtons({ item }) {
  const { removeFromCart, addToCart, destroyCartItem } = useCart();

  return (
    <div className="flex gap-3 items-center justify-between">
      <div className="flex gap-3">
        <button onClick={() => addToCart(item)}>+</button>
        <span>{item.count}</span>
        <button onClick={() => removeFromCart(item)}>-</button>
      </div>
      <Button
        className="bg-transparent hover:bg-transparent shadow-none text-red-500 px-0 py-0"
        onClick={() => destroyCartItem(item)}
      >
        Remove
      </Button>
    </div>
  );
}
