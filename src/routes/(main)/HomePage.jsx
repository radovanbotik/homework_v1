import { Button } from "../../components/ui/Button";
import { Header } from "../../components/ui/Header";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col h-[200vh]">
      <Header title={"Welcome to our store"}></Header>
      <Button href={"/listing-page"} relative="path" className={"mx-auto"}>
        Continue
      </Button>
    </div>
  );
}
