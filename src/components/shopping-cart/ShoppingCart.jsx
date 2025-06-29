import { useEffect } from "react";
import { CartToggle } from "./CartToggle";
import { MiniCart } from "./mini-cart/MiniCart";
import { createPortal } from "react-dom";
import { Backdrop } from "./Backdrop";
import { useCart } from "../../store/CartContext";

export function ShoppingCart() {
  const { closeCart, showCart } = useCart();

  function handleClick(e) {
    if (e.target.id === "cart" || e.target.id === "shopping-button") return;
    else {
      return closeCart();
    }
  }

  useEffect(() => {
    if (showCart) {
      window.addEventListener("click", handleClick);
    }
    return () => window.removeEventListener("click", handleClick);
  }, [showCart]);

  return (
    <>
      {createPortal(
        <>
          <MiniCart />
          <Backdrop />
        </>,
        document.getElementById("portal")
      )}
      <CartToggle />
    </>
  );
}
