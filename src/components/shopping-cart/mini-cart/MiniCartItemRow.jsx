import { formatPrice } from "../../../util/formatPrice";

export function MiniCartItemRow({ item }) {
  return (
    <tr>
      <td className="whitespace-nowrap py-1 pl-4 pr-3 text-xs  text-gray-400 sm:pl-0">{item.name}</td>
      <td className="whitespace-nowrap px-3 py-1 text-xs text-right text-gray-400">{item.count}</td>
      <td className="whitespace-nowrap pl-3 pr-0 py-1 text-xs text-right text-gray-400">
        {formatPrice({ price: item.price * item.count })}
      </td>
    </tr>
  );
}
