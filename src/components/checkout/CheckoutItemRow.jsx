import { useCart } from "../../store/CartContext";
import { formatPrice } from "../../util/formatPrice";
import { Button } from "../ui/Button";

export function CheckoutItemRow({ item }) {
  const { removeFromCart, destroyCartItem, addToCart } = useCart();

  return (
    <li key={item.id} className="flex py-3">
      <img
        alt={item.imageAlt}
        src={item.imageUrl}
        className="size-24 rounded-md sm:size-32 shrink-0 object-scale-down"
      />

      <div className="ml-4 flex flex-1 flex-col ">
        <div className="flex justify-between">
          <p>{item.name}</p>
          <p>{formatPrice({ price: item.price * item.count })}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center text-xs">
            <button className="p-2  text-xs" onClick={() => addToCart(item)}>
              +
            </button>
            <span>{item.count}</span>
            <button className="p-2 text-xs" onClick={() => removeFromCart(item)}>
              -
            </button>
          </div>
          <Button
            className="bg-transparent hover:bg-transparent shadow-none text-red-500 px-0"
            onClick={() => destroyCartItem(item)}
          >
            Remove
          </Button>
        </div>
      </div>
    </li>
  );
}
