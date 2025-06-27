import tooltipStatic from "../../assets/tooltip-static.svg";
import tooltipHover from "../../assets/tooltip-hover.svg";
import { cn } from "../../util/cn.js";

export function TooltipButton({ onMouseEnter, onMouseLeave }) {
  return (
    <button
      role="button"
      className={cn("z-10 w-6 h-6 group absolute right-2 top-2")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={tooltipStatic}
        alt="tooltip"
        aria-hidden={true}
        className="w-full h-full object-cover group-hover:hidden block pointer-events-none"
      />
      <img
        src={tooltipHover}
        alt="tooltip"
        aria-hidden={true}
        className="w-full h-full object-cover hidden group-hover:block pointer-events-none"
      />
    </button>
  );
}
