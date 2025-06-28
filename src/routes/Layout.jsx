import { Outlet } from "react-router";
import { Navbar } from "../components/navigation/Navbar";
import { Toaster } from "react-hot-toast";
import bg from "../assets/bg.png";
import Container from "../components/ui/Container";
import { Backdrop } from "../components/shopping-cart/Backdrop";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="relative isolate w-full h-full ">
        <Container className="absolute inset-0 -z-10">
          <img
            src={bg}
            alt="background image"
            aria-label="hidden"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </Container>
        <Outlet />
        <Toaster position="bottom-right" />
      </div>
    </>
  );
}
