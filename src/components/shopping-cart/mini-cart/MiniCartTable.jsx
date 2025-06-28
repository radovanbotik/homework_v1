import { MiniCartItemRow } from "./MiniCartItemRow";

export function MiniCartTable({ cartItems }) {
  return (
    <table className="min-w-full">
      <thead>
        <tr>
          <th scope="col" className="pb-2 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-0">
            Items
          </th>
          <th scope="col" className="px-3 pb-2 text-right text-xs font-semibold text-gray-900">
            Units
          </th>
          <th scope="col" className="pb-2 pl-3  pr-0 text-right text-xs font-semibold text-gray-900">
            Price
          </th>
        </tr>
      </thead>
      <tbody className="">
        {cartItems.map(item => (
          <MiniCartItemRow item={item} />
        ))}
      </tbody>
    </table>
  );
}
