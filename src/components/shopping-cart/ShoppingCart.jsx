import { ShoppingButton } from "./ShoppingButton";
import { ShoppingCard } from "./ShoppingCard";
import { createPortal } from "react-dom";

export function ShoppingCart() {
  return (
    <>
      <ShoppingButton />
      {createPortal(<ShoppingCard />, document.getElementById("portal"))}
    </>
  );
}
