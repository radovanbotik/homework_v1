import { ShoppingCart } from "../shopping-cart/ShoppingCart";
import { Button } from "../ui/Button";
import Container from "../ui/Container";

export function Navbar() {
  return (
    <Container className={"bg-[#233239]"}>
      <div className="flex w-full relative items-center h-12 text-white">
        <Button
          href={"/listing-page"}
          className="static sm:absolute sm:left-1/2 sm:top-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-transparent text-xl hover:bg-inherit"
        >
          HALLO WORLD
        </Button>
        <ShoppingCart />
      </div>
    </Container>
  );
}
