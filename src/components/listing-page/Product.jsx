import { useCart } from "../../store/CartContext";
import { formatPrice } from "../../util/formatPrice";
import { Card } from "../ui/Card";
import { TooltipTrigger } from "./tooltip/TooltipTrigger";
import { Tooltip } from "./tooltip/Tooltip";
import { Button } from "../ui/Button";
import { useState } from "react";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";

export function Product({ item }) {
  const { addToCart } = useCart();
  const price = formatPrice({ price: item.price });
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const buttonOffset = 8;
  const tooltipWidth = 320;

  function onMouseEnter(e) {
    const anchoringButtonRight = e.target.getBoundingClientRect().right;
    if (window.innerWidth - (anchoringButtonRight + buttonOffset) < tooltipWidth) {
      setIsLeft(true);
    }
    setShowTooltip(true);
  }

  function onMouseLeave() {
    setShowTooltip(false);
  }

  return (
    <Card className="bg-[#FCFCFC] rounded-md relative sm:pb-3 sm:pt-6 max-w-sm sm:max-w-none mx-auto sm:mx-0">
      <TooltipTrigger onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <Tooltip item={item} isShown={showTooltip} isLeft={isLeft} />
      <ProductImage imageSrc={item.imageUrl} alt={`${item.description}`} />
      <ProductInfo attributes={[item.name, price]} />
      <Button className="w-full mt-2 py-2.5" onClick={() => addToCart(item)}>
        Add to Cart
      </Button>
    </Card>
  );
}
