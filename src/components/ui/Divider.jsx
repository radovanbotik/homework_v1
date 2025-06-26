import { cn } from "../../util/cn";

export function Divider({ className }) {
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
    </div>
  );
}
