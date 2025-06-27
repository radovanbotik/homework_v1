import { cn } from "../../util/cn";

export function Card({ children, className, ...props }) {
  return (
    <div className={cn("rounded-lg  shadow px-4 py-2 sm:py-3 sm:px-5", className)} {...props}>
      {children}
    </div>
  );
}
