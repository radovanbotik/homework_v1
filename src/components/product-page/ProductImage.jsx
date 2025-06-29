export function ProductImage({ alt, imageUrl }) {
  return (
    <img
      alt={alt}
      src={imageUrl}
      className="aspect-square object-scale-down sm:rounded-lg sm:w-60 w-3/4 mx-auto block"
    />
  );
}
