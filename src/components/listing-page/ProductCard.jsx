import { useCart } from "../../store/CartContext";
import { formatPrice } from "../../util/formatPrice";
import { Card } from "../ui/Card";
import { TooltipButton } from "./TooltipButton";
import { TooltipCard } from "./TooltipCard";
import { Button } from "../ui/Button";
import { useState } from "react";

export function ProductCard({ item }) {
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
    <Card className="bg-[#FCFCFC] relative sm:py-5">
      <TooltipButton onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <TooltipCard item={item} isShown={showTooltip} isLeft={isLeft} />
      <div className="aspect-square w-3/5 mx-auto relative mb-5">
        <img
          src={item.imageUrl}
          alt={`image preview of product ${item.name}`}
          className="block border-0 w-full h-full object-scale-down absolute left-0 top-0 inset-0 "
        />
      </div>
      <div className="text-[#1D1D39] lg:text-sm font-medium mt-1">{item.name}</div>
      <div className="text-[#1D1D39] lg:text-xs font-bold mt-1">{price}</div>
      <Button className="w-full mt-2" onClick={() => addToCart(item)}>
        Add to Cart
      </Button>
    </Card>
  );
}
