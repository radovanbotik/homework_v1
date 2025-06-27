import { useCart } from "../../store/CartContext";
import { cn } from "../../util/cn";

export function Backdrop() {
  const { showCart } = useCart();

  return <div className={cn("fixed w-screen h-screen //bg-black/20 z-30", showCart ? "block" : "hidden")}></div>;
}
