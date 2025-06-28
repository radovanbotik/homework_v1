import { formatPrice } from "../../../util/formatPrice";

export function MiniCartTotal({ totalPrice }) {
  return (
    <div className="min-w-full flex">
      <div className="flex-1 text-left text-xs font-semibold text-gray-900">Total Order Value</div>

      <div className=" text-right text-xs font-semibold text-gray-900">{formatPrice({ price: totalPrice })}</div>
    </div>
  );
}
