export function TooltipImage({ imageSrc, alt }) {
  return (
    <div className="h-20 w-20 relative shrink-0 -ml-4">
      <img src={imageSrc} alt={alt} className="object-contain rounded mb-2 size-full absolute" />
    </div>
  );
}
