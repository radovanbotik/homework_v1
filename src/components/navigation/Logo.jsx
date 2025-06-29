import { Link } from "react-router";

export function Logo() {
  return (
    <Link
      to={"/"}
      className="static bg-transparent text-white text-sm p-3 transform translate-x-0 translate-y-0 scale-100
             active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2
             sm:absolute sm:left-1/2 sm:top-1/2 sm:translate-x-[-50%] sm:translate-y-[-50%] sm:scale-100 sm:active:scale-95"
    >
      HALLO WORLD
    </Link>
  );
}
