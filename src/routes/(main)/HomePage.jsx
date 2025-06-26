import { Button } from "../../components/ui/Button";

export default function HomePage() {
  return (
    <div className="w-full flex">
      <div className="grid place-content-center mx-auto p-16">
        <h2>Welcome, to our store</h2>
        <Button href={"/listing-page"} relative="path">
          Continue
        </Button>
      </div>
    </div>
  );
}
