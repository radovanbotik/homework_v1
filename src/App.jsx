import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./routes/Layout";
import HomePage from "./routes/(main)/HomePage";
import ListingPage from "./routes/(main)/ListingPage";
import { CartProvider } from "./store/CartContext";
import Checkout from "./routes/(main)/Checkout";
import ErrorPage from "./routes/Error";
import ProductPage from "./routes/(main)/ProductPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, Component: HomePage },
            {
              path: "listing-page",
              children: [
                { index: true, Component: ListingPage },
                { path: ":productId", Component: ProductPage },
              ],
            },
            { path: "checkout", Component: Checkout },
            { path: "*", Component: ErrorPage },
          ],
        },
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
