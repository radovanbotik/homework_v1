import { Card } from "../ui/Card";
import { Divider } from "../ui/Divider";
import { formatPrice } from "../../util/formatPrice";
import { Button } from "../ui/Button";
import { useCart } from "../../store/CartContext";
import { getItemCount, getTotal } from "../../util/shoppingCart";
import { useNavigate } from "react-router";
import { cn } from "../../util/cn";
import { Triangle } from "../ui/Triangle";

export function ShoppingCard() {
  const navigate = useNavigate();
  const { cartItems, showCart, anchorCoordinates } = useCart();

  console.log(anchorCoordinates);

  const totalPrice = getTotal(cartItems);
  const totalCount = getItemCount(cartItems);

  return (
    <Card
      id="cart"
      className={cn("bg-white w-72 text-black z-50 absolute top-14 rounded-sm ", showCart ? "block" : "hidden")}
      onMouseDown={e => e.stopPropagation()}
      style={{ right: anchorCoordinates.right }}
    >
      <Triangle />
      {cartItems.length === 0 ? (
        <h3 className="text-base font-semibold text-gray-900">Your shopping cart is empty</h3>
      ) : (
        <>
          <div className="pointer-events-none">
            <h3 className="text-base font-semibold text-gray-900">
              You have {totalCount} {totalCount > 1 ? "items" : "item"} in your cart!
            </h3>
            <Divider className="pt-5" />
            <div>
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th scope="col" className="pb-2 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-0">
                      Items
                    </th>
                    <th scope="col" className="px-3 pb-2 text-right text-xs font-semibold text-gray-900">
                      Units
                    </th>
                    <th scope="col" className="pb-2 pl-3  pr-0 text-right text-xs font-semibold text-gray-900">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td className="whitespace-nowrap py-1 pl-4 pr-3 text-xs  text-gray-400 sm:pl-0">{item.name}</td>
                      <td className="whitespace-nowrap px-3 py-1 text-xs text-right text-gray-400">{item.count}</td>
                      <td className="whitespace-nowrap pl-3 pr-0 py-1 text-xs text-right text-gray-400">
                        {formatPrice({ price: item.price * item.count })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Divider className="pt-5" />
            <table className="min-w-full">
              <thead>
                <tr>
                  <th scope="col" className="pb-2 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-0">
                    Total Order Value
                  </th>

                  <th scope="col" className="pb-2 pl-3  pr-0 text-right text-xs font-semibold text-gray-900">
                    {formatPrice({ price: totalPrice })}
                  </th>
                </tr>
              </thead>
            </table>
            <Divider className="pt-5" />
          </div>

          <Button
            className="w-full pointer-events-auto"
            onClick={() => {
              close();
              navigate("/checkout");
            }}
          >
            Checkout
          </Button>
        </>
      )}
    </Card>
  );
}
