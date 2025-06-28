import { Card } from "../../components/ui/Card";
import { useCart } from "../../store/CartContext";
import { getTotal } from "../../util/shoppingCart";
import { CheckoutWithItems } from "../../components/checkout/CheckoutWithItems";
import { CheckoutNoItems } from "../../components/checkout/CheckoutNoItems";

export default function Checkout() {
  const { cartItems } = useCart();
  const totalPrice = getTotal(cartItems);

  const hasItems = cartItems.length !== 0;

  console.log(cartItems);
  return (
    <div className="p-12">
      <Card className="max-w-2xl mx-auto  bg-white">
        <h2 className="text-left font-bold tracking-tigh">Shopping Cart</h2>
        {hasItems ? <CheckoutWithItems totalPrice={totalPrice} cartItems={cartItems} /> : <CheckoutNoItems />}
      </Card>
    </div>
  );
}
