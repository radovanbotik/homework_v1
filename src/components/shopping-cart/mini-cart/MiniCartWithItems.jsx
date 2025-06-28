import { useLocation, useNavigate } from "react-router";
import { useCart } from "../../../store/CartContext";
import { Button } from "../../ui/Button";
import { Divider } from "../../ui/Divider";
import { MiniCartTable } from "./MiniCartTable";
import { MiniCartTotal } from "./MiniCartTotal";

export function MiniCartWithItems({ totalCount, cartItems, totalPrice }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { closeCart } = useCart();

  console.log(location);
  const isCheckout = location.pathname === "/checkout";

  return (
    <>
      <div className="pointer-events-none">
        <h3 className="text-base font-semibold text-gray-900">
          You have {totalCount} {totalCount > 1 ? "items" : "item"} in your cart!
        </h3>
        <Divider className="pt-5" />
        <MiniCartTable cartItems={cartItems} />
        <Divider className="pt-5" />
        <MiniCartTotal totalPrice={totalPrice} />
        <Divider className="pt-5" />
      </div>

      {!isCheckout && (
        <Button
          className="w-full pointer-events-auto"
          onClick={() => {
            closeCart();
            navigate("/checkout");
          }}
        >
          Checkout
        </Button>
      )}
    </>
  );
}
