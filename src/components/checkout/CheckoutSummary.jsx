import { formatPrice } from "../../util/formatPrice";

export function CheckoutSummary({ totalPrice }) {
  return (
    <dl className="flex gap-4 items-center justify-between">
      <dt className="text-base font-medium text-gray-900">Total Order Value</dt>
      <dd className="ml-4 text-base font-medium text-gray-900">{formatPrice({ price: totalPrice })}</dd>
    </dl>
  );
}
