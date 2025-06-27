import cart from "../../assets/cart.svg";
import { Card } from "../ui/Card";
import { Divider } from "../ui/Divider";
import { Modal } from "../ui/Modal";
import { formatPrice } from "../../util/formatPrice";
import { Button } from "../ui/Button";
import { useCart } from "../../store/CartContext";
import { getItemCount, getTotal } from "../../util/shoppingCart";
import { MenuItem } from "@headlessui/react";
import { useNavigate } from "react-router";

function ShoppingCartButton(props, ref) {
  const { cartItems } = useCart();
  const totalCount = getItemCount(cartItems);

  return (
    <button className="inline-flex gap-2 items-center text-sm" ref={ref} {...props}>
      <div className="relative">
        <img src={cart} className="w-6 h-6" />
        <div className="absolute w-4 h-4  rounded-full bg-[#E60000] -bottom-1 -left-1 text-xs">{totalCount}</div>
      </div>
      <span>Shopping Cart</span>
    </button>
  );
}

function ShoppingCartCard() {
  const navigate = useNavigate();
  const { cartItems } = useCart();

  if (cartItems.length === 0)
    return (
      <Card className="bg-white w-72 text-black z-10">
        <p>very empty</p>
      </Card>
    );

  const totalPrice = getTotal(cartItems);
  const totalCount = getItemCount(cartItems);

  return (
    <Card className="bg-white w-72 text-black z-10">
      <h3 className="text-base font-semibold text-gray-900">You have {totalCount} items in your cart!</h3>
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
              <tr key={item.email}>
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
      <MenuItem>
        {({ close }) => (
          <Button
            className="w-full"
            onClick={() => {
              close();
              navigate("/checkout");
            }}
          >
            Checkout
          </Button>
        )}
      </MenuItem>
    </Card>
  );
}

export function ShoppingCart() {
  return <Modal Button={<ShoppingCartButton />} Cart={ShoppingCartCard} />;
}
