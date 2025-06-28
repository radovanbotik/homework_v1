import { TooltipFeatureItemRow } from "./TooltipFeatureItemRow";

export function TooltipFeatureSection({ features }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xs font-bold text-[#1D1D39]">Key Features</h3>
      <ul className="space-y-1 text-xs">
        {features.map(feature => (
          <TooltipFeatureItemRow feature={feature} key={feature.name} />
        ))}
      </ul>
    </div>
  );
}
