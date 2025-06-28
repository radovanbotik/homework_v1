export function ProductImage({ imageSrc, alt }) {
  return (
    <img
      src={imageSrc}
      alt={alt}
      className="block border-0 aspect-square w-4/5 mx-auto relative mb-5 object-scale-down"
    />
  );
}
