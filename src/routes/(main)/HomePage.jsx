import { Button } from "../../components/ui/Button";
import { Header } from "../../components/ui/Header";

export default function HomePage() {
  return (
    <>
      <Header title={"Welcome to our store"}></Header>
      <Button href={"/listing-page"} relative="path" className="mx-auto block w-fit">
        Continue to store
      </Button>
    </>
  );
}
