import { Link } from "react-router";
import { cn } from "../../util/cn";

export function Button({ children, className, onClick, href, ...props }) {
  if (href) {
    return (
      <Link
        to={href}
        className={cn(
          "rounded-md bg-[#E60000] active:scale-95 transition-all p-3 text-sm text-white shadow-sm hover:bg-[#e60000d5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000] inline-flex items-center justify-center",
          className
        )}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-md bg-[#E60000] active:scale-95 transition-all p-3 text-sm text-white shadow-sm hover:bg-[#e60000d5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E60000]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
