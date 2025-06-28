import { createContext, useContext, useLayoutEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const cartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setIsShowCart] = useState(false);
  const [anchorCoordinates, setAnchorCoordinates] = useState({});
  const shoppingButtonRef = useRef(null);

  function addToCart(item) {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem)
        return prev.map(i => {
          // check for the specific item, if found increase count. if not found it is not our item and just return it
          return i.id === item.id ? { ...i, count: i.count + 1 } : i;
        });
      else {
        // if the new item is entering the cart for first time, copy rest of the items and add it
        return [...prev, { ...item, count: 1 }];
      }
    });
    toast.success(`${item.name} was added to your shopping cart.`);
  }

  function getAnchorCoordinates() {
    const anchorRect = shoppingButtonRef.current.getBoundingClientRect();
    console.log(shoppingButtonRef.current);
    const rightOffScreen = window.innerWidth - anchorRect.right;
    setAnchorCoordinates(prev => ({ ...prev, right: rightOffScreen }));
  }

  function toggleCart(e) {
    getAnchorCoordinates(e);
    setIsShowCart(prev => !prev);
  }

  function closeCart() {
    setIsShowCart(false);
  }

  useLayoutEffect(() => {
    if (showCart) {
      window.addEventListener("resize", getAnchorCoordinates);
      return () => {
        window.removeEventListener("resize", getAnchorCoordinates);
      };
    }
    return () => {};
  }, [showCart]);

  return (
    <cartContext.Provider
      value={{ anchorCoordinates, cartItems, showCart, addToCart, toggleCart, closeCart, shoppingButtonRef }}
    >
      {children}
    </cartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(cartContext);
  if (!context) throw new Error("useCart hook must be called within CartProvider");
  return context;
}
