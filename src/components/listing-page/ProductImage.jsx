import { Link } from "react-router";

export function ProductImage({ imageSrc, alt, id }) {
  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt={alt}
        className="block border-0 aspect-square w-4/5 mx-auto relative mb-5 object-scale-down"
      />
      <Link to={id} className="absolute inset-0 size-full" />
    </div>
  );
}
