export function TooltipDescriptionSection({ description }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-bold text-[#1D1D39]">Description</h3>
      <p className="text-xs ">{description}</p>
    </div>
  );
}
