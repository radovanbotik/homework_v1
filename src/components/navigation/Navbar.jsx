import { ShoppingCart } from "../shopping-cart/ShoppingCart";
import { Button } from "../ui/Button";
import Container from "../ui/Container";
import { Logo } from "./Logo";

export function Navbar() {
  return (
    <Container className={"bg-[#233239] flex w-full relative items-center h-12 text-white "}>
      <Logo />
      <ShoppingCart />
    </Container>
  );
}
