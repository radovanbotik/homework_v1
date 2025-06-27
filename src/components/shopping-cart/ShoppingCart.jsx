import { useEffect } from "react";
import { ShoppingButton } from "./ShoppingButton";
import { ShoppingCard } from "./ShoppingCard";
import { createPortal } from "react-dom";
import { Backdrop } from "./Backdrop";
import { useCart } from "../../store/CartContext";

export function ShoppingCart() {
  const { closeCart, showCart } = useCart();

  function handleClick(e) {
    if (e.target.id === "cart" || e.target.id === "shopping-button") return;
    else {
      console.log(e.target);
      return closeCart();
    }
  }

  useEffect(() => {
    if (showCart) {
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }
  }, [showCart]);

  return (
    <>
      {createPortal(
        <>
          <ShoppingCard />
          <Backdrop />
        </>,
        document.getElementById("portal")
      )}
      <ShoppingButton />
    </>
  );
}
