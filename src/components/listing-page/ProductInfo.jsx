export function ProductInfo({ attributes }) {
  return (
    <ul className="text-[#1D1D39] font-medium">
      {attributes.map((attribute, idx) => (
        <li key={idx}>{attribute}</li>
      ))}
    </ul>
  );
}
