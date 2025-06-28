import { cn } from "../../../util/cn";
import { Card } from "../../ui/Card";
import { TooltipDescriptionSection } from "./TooltipDescriptionSection";
import { TooltipFeatureSection } from "./TooltipFeatureSection";
import { TooltipImage } from "./TooltipImage";

export function Tooltip({ item, isShown, isLeft }) {
  const { description, features } = item;

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
        <TooltipImage imageSrc={item.imageUrl} alt={`Previewing ${item.name}`} />
        <div className="space-y-2">
          <TooltipDescriptionSection description={description} />
          <TooltipFeatureSection features={features} />
        </div>
      </div>
    </Card>
  );
}
