import { createContext, useContext, useLayoutEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

const cartContext = createContext(null);

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setIsShowCart] = useState(false);
  const [anchorCoordinates, setAnchorCoordinates] = useState({});
  const CartToggleRef = useRef(null);

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

  function destroyCartItem(item) {
    setCartItems(prev => {
      return prev.filter(i => i.id !== item.id);
    });
    toast.success(`${item.name} was removed from your shopping cart.`);
  }

  function removeFromCart(item) {
    setCartItems(prev => {
      return (
        prev
          .map(i => {
            //check for the specific item which count we want to reduce
            if (i.id === item.id) {
              //if count is bigger than 1
              if (i.count > 1) {
                //return object and reduce the count
                return { ...i, count: i.count - 1 };
              } else {
                //if it is smaller than one return null instead of object
                return null;
              }
            }
            //if it is not matching it means it is not our item, it is other item in cartItems array. return to preserve it
            return i;
          })
          //remove nulls from array
          .filter(Boolean)
      );
    });
    toast.success(`${item.name} was removed from your shopping cart.`);
  }

  function getAnchorCoordinates() {
    const anchorRect = CartToggleRef.current.getBoundingClientRect();
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
    }
    return () => {
      window.removeEventListener("resize", getAnchorCoordinates);
    };
  }, [showCart]);

  return (
    <cartContext.Provider
      value={{
        anchorCoordinates,
        cartItems,
        showCart,
        addToCart,
        toggleCart,
        closeCart,
        removeFromCart,
        destroyCartItem,
        CartToggleRef,
      }}
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
