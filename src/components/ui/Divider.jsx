import { cn } from "../../util/cn";

export function Divider({ className, text }) {
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden="true" className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-gray-300" />
      </div>
      {text && (
        <div className="relative flex justify-center">
          <span className="bg-white px-2 text-sm text-gray-500">{text}</span>
        </div>
      )}
    </div>
  );
}
