import { Link } from "react-router";

export function ProductInfo({ id, name, price }) {
  return (
    <ul className="text-[#1D1D39] font-medium">
      <li className="relative hover:underline">
        {name}
        <Link to={id} className="absolute size-full inset-0" />
      </li>
      <li>{price}</li>
    </ul>
  );
}
