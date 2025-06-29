import { formatPrice } from "../../util/formatPrice";

export function ProductHeader({ name, price, description }) {
  return (
    <>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">{name}</h3>
      <p className="text-xl tracking-tight text-gray-900">{formatPrice({ price: price })}</p>
      <p className="space-y-6 text-base text-gray-700">{description}</p>
    </>
  );
}
