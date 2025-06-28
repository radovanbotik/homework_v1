import { useCart } from "../../store/CartContext";
import { formatPrice } from "../../util/formatPrice";
import { Card } from "../ui/Card";
import { TooltipTrigger } from "./tooltip/TooltipTrigger";
import { Tooltip } from "./tooltip/Tooltip";
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
    <Card className="bg-[#FCFCFC] rounded-md relative sm:pb-3 sm:pt-6 max-w-sm sm:max-w-none mx-auto sm:mx-0">
      <TooltipTrigger onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <Tooltip item={item} isShown={showTooltip} isLeft={isLeft} />
      <div className="aspect-square w-4/5 mx-auto relative mb-5">
        <img
          src={item.imageUrl}
          alt={`image preview of product ${item.name}`}
          className="block border-0 w-full h-full object-scale-down absolute left-0 top-0 inset-0 "
        />
      </div>
      <div className="text-[#1D1D39] lg:text-base font-medium mb-1">{item.name}</div>
      <div className="text-[#1D1D39] lg:text-sm font-bold mb-1">{price}</div>
      <Button className="w-full mt-2 py-2.5" onClick={() => addToCart(item)}>
        Add to Cart
      </Button>
    </Card>
  );
}
