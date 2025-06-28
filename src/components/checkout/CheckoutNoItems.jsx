import { Button } from "../ui/Button";

export function CheckoutNoItems() {
  return (
    <>
      <div>You don't have any items in your cart</div>
      <Button href={"/listing-page"} className=" block w-fit hover:text-red-500">
        Continue shopping
      </Button>
    </>
  );
}
