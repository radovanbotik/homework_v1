import { useState } from "react";
import { ShoppingButton } from "./ShoppingButton";
import { ShoppingCard } from "./ShoppingCard";
import { createPortal } from "react-dom";

export function ShoppingCart() {
  const [showCart, setIsShowCart] = useState(false);

  function onMouseDown() {
    setIsShowCart(prev => !prev);
  }

  return (
    <>
      <ShoppingButton onMouseDown={onMouseDown} />
      {createPortal(<ShoppingCard show={showCart} />, document.getElementById("portal"))}
    </>
  );
}
