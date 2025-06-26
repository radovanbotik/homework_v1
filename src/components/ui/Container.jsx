import { cn } from "../../util/cn";

export default function Container({ children, className }) {
  return <div className={cn("mx-auto max-w-screen-2xl px-6 lg:px-8", className)}>{children}</div>;
}
