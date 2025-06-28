import { formatPrice } from "../../util/formatPrice";

export function CheckoutSummary({ totalPrice }) {
  return (
    <div>
      <dl className="space-y-4">
        <div className="flex items-center justify-between">
          <dt className="text-base font-medium text-gray-900">Total Order Value</dt>
          <dd className="ml-4 text-base font-medium text-gray-900">{formatPrice({ price: totalPrice })}</dd>
        </div>
      </dl>
    </div>
  );
}
