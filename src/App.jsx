import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import RootLayout from "./routes/Layout";
import HomePage from "./routes/(main)/HomePage";
import ListingPage from "./routes/(main)/ListingPage";
import ShoppingCart from "./routes/(main)/ShoppingCart";
import { CartProvider } from "./store/CartContext";
import Checkout from "./routes/(main)/Checkout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        { index: true, Component: HomePage },
        { path: "listing-page", Component: ListingPage },
        { path: "shopping-cart", Component: ShoppingCart },
        { path: "checkout", Component: Checkout },
      ],
    },
  ]);

  return (
    <CartProvider>
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;
