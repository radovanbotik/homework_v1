import { Button } from "../../components/ui/Button";

export default function Checkout() {
  return (
    <div className="w-full flex">
      <div className="grid place-content-center mx-auto p-16">
        <h2>You have reached the checkout page</h2>
        <Button href={".."} relative="path">
          Return to homepage
        </Button>
      </div>
    </div>
  );
}
