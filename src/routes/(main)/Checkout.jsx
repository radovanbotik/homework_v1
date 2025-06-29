import { Card } from "../../components/ui/Card";
import { useCart } from "../../store/CartContext";
import { getTotal } from "../../util/shoppingCart";
import { CheckoutWithItems } from "../../components/checkout/CheckoutWithItems";
import { CheckoutNoItems } from "../../components/checkout/CheckoutNoItems";
import Container from "../../components/ui/Container";

export default function Checkout() {
  const { cartItems } = useCart();
  const totalPrice = getTotal(cartItems);
  const hasItems = cartItems.length !== 0;

  return (
    <Container className="p-16">
      <Card className="max-w-2xl mx-auto  bg-white">
        <h2 className="text-left font-bold tracking-tigh">Shopping Cart</h2>
        {hasItems ? <CheckoutWithItems totalPrice={totalPrice} cartItems={cartItems} /> : <CheckoutNoItems />}
      </Card>
    </Container>
  );
}
