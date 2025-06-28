import { isBool } from "../../../util/isBool";

export function TooltipFeatureItemRow({ feature }) {
  return (
    <li key={feature.name} className="space-y-1">
      <h4 className="font-semibold">{feature.name}</h4>
      <div>
        <ul className="space-y-0.5">
          {feature.values.map(v => (
            <li className="flex ml-2" key={v.label}>
              <div className="flex-1">{v.label}</div>
              <div className="font-semibold">{isBool(v.value)}</div>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
