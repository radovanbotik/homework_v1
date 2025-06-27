import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cn } from "../../util/cn";
import tooltipStatic from "../../assets/tooltip-static.svg";
import tooltipHover from "../../assets/tooltip-hover.svg";

export function Tooltip({ content }) {
  const anchoringElement = useRef(null);
  const card = useRef(null);
  const [anchorCoordinates, setAnchorCoordinates] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const GAP = 10;
  const delay = useRef();
  /*
    element.getBoundingClientRect().x - Same as left, the DISTANCE from the LEFT of the VIEWPORT to the LEFT of the ELEMENT 
    element.getBoundingClientRect().y - Same as top, the DISTANCE from the TOP of the VIEWPORT to the TOP of the ELEMENT 
    element.getBoundingClientRect().width - Width of the element (including padding and border, but not margin)
    element.getBoundingClientRect().height - Height of the element
  
    1.  we need to add width of the anchoring element to the x value of the anchoring element so the card can be rendered right next to the anchoring element 
    2.  getBoundingClientRect().y is distance from top of viewport (DOCUMENT START not WINDOW start) - we need add window.scroll to account for offset
    3.  add logic to render card in middle if there is not enough space on the right
    4.  handle issue with flickering. there is tiny spot, mainly on small screens where card is intersecting with button. hovering over this area will cause a flickering
        introducing delay helps to avoid this problem
    5.  when we start on small screen and hover to show tooltip the centering logic is bugged. it displays card on the left however not centered as we wanted it.
        - we are getting dimensions of card through getboundingclientrect before it is painted. 
  */

  function getCoordinates() {
    const anchorRect = anchoringElement.current.getBoundingClientRect();

    requestAnimationFrame(() => {
      if (!card.current) return;

      let cardX = anchorRect.x + anchorRect.width + GAP;
      let cardY = anchorRect.y + window.scrollY;

      const anchorRight = anchorRect.right;
      const spaceOnRight = window.innerWidth - anchorRight;
      const anchorLeft = anchorRect.left;
      const spaceOnLeft = window.innerWidth - anchorLeft;

      /* render in middle if not enough space on sides */
      const cardWidth = card.current.getBoundingClientRect().width;
      if (spaceOnRight < cardWidth || spaceOnLeft < cardWidth) {
        cardX = window.innerWidth / 2 - cardWidth / 2;
      }

      console.log(cardX, cardY, window.innerWidth, window.innerHeight);
      setAnchorCoordinates({ x: cardX, y: cardY });
    });
  }

  function handleMouseEnter() {
    clearTimeout(delay.current);
    getCoordinates();
    setShowTooltip(true);
  }

  function handleMouseLeave() {
    delay.current = setTimeout(() => {
      setShowTooltip(false);
    }, 100);
  }

  //run  once on mount, or when showTooltip is true (mousenter)
  useEffect(() => {
    if (showTooltip) {
      getCoordinates();
      window.addEventListener("scroll", getCoordinates);
      window.addEventListener("resize", getCoordinates);
      return () => {
        window.removeEventListener("scroll", getCoordinates);
        window.removeEventListener("resize", getCoordinates);
      };
    }
  }, [showTooltip]);

  return (
    <div className="isolate">
      <button
        ref={anchoringElement}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="button"
        className={cn("z-10 w-6 h-6 group absolute right-2 top-2")}
      >
        <img
          src={tooltipStatic}
          alt="tooltip"
          aria-hidden={true}
          className="w-full h-full object-cover group-hover:hidden block pointer-events-none"
        />
        <img
          src={tooltipHover}
          alt="tooltip"
          aria-hidden={true}
          className="w-full h-full object-cover hidden group-hover:block pointer-events-none"
        />
      </button>
      {createPortal(
        <div
          style={{
            position: "absolute",
            top: `${anchorCoordinates.y}px`,
            left: `${anchorCoordinates.x}px`,
            display: `${showTooltip ? "block" : "none"}`,
          }}
          ref={card}
        >
          {content}
        </div>,
        document.getElementById("tooltip")
      )}
    </div>
  );
}
