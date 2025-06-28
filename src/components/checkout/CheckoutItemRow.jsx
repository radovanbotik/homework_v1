import { formatPrice } from "../../util/formatPrice";
import { CheckoutItemButtons } from "./CheckoutItemButtons";

export function CheckoutItemRow({ item }) {
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
        <CheckoutItemButtons item={item} />
      </div>
    </li>
  );
}
