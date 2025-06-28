import { Button } from "../../components/ui/Button";
import { Header } from "../../components/ui/Header";

export default function Checkout() {
  return (
    <>
      <Header title={"Welcome to our store"}></Header>
      <Button href={"/listing-page"} relative="path" className="w-fit block mx-auto">
        Return to products
      </Button>
    </>
  );
}
