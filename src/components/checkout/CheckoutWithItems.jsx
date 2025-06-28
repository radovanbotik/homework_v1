import { Link } from "react-router";
import { Button } from "../ui/Button";
import { Divider } from "../ui/Divider";
import { CheckoutItemRow } from "./CheckoutItemRow";
import { CheckoutSummary } from "./CheckoutSummary";

export function CheckoutWithItems({ cartItems, totalPrice }) {
  return (
    <>
      <ul role="list" className="divide-y divide-gray-200  border-gray-200">
        {cartItems.map(item => (
          <CheckoutItemRow key={item.id} item={item} />
        ))}
      </ul>

      <CheckoutSummary totalPrice={totalPrice} />
      <Button disabled={true} className="w-full mt-3">
        Checkout
      </Button>
      <Divider text="or" className="py-3" />
      <Link to={"/listing-page"} className="mx-auto block w-fit hover:text-red-500">
        Continue shopping
      </Link>
    </>
  );
}
