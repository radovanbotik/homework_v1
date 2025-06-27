import { cn } from "../../util/cn";
import { isBool } from "../../util/isBool";
import { Card } from "../ui/Card";

export function TooltipCard({ item, isShown, isLeft }) {
  return (
    <Card
      className={cn(
        "w-3/4 sm:max-w-80 absolute rounded-none overflow-hidden z-50 sm:w-80 top-0 block",
        isShown ? "block" : "hidden",
        isLeft ? "right-12" : "right-0 translate-x-full"
      )}
    >
      <div className="size-full absolute inset-0 bg-[#FDF1D7]/95 -z-10"></div>
      <div className="flex gap-2.5 z-10">
        <div className="h-20 w-20 relative shrink-0 -ml-4">
          <img src={item.imageUrl} alt={item.name} className="object-contain rounded mb-2 size-full absolute" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xs font-bold text-[#1D1D39]">Description</h3>
          <dd className="text-xs ">{item.description}</dd>

          <div className="space-y-1">
            <h3 className="text-xs font-bold text-[#1D1D39]">Key Features</h3>
            <ul className="space-y-1">
              {item.features.map(f => (
                <li key={f.name}>
                  <dl>
                    <div className="space-y-1">
                      <div className="text-xs text-[#1D1D39]">{f.name}</div>
                      <div className="col-span-2">
                        {f.values.map(v => (
                          <dl className="ml-2" key={v.label}>
                            <div className="grid grid-cols-2  text-[#1D1D39]">
                              <dt className="text-xs">{v.label}</dt>
                              <dd className="text-xs text-right">{isBool(v.value)}</dd>
                            </div>
                          </dl>
                        ))}
                      </div>
                    </div>
                  </dl>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Card>
  );
}
