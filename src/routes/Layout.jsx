import { Outlet } from "react-router";
import { Navbar } from "../components/navigation/Navbar";
import { Toaster } from "react-hot-toast";
import bg from "../assets/bg.png";
import Container from "../components/ui/Container";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="relative isolate w-full h-[calc(100%-3rem)]">
        <div className="absolute inset-0 -z-10">
          <img
            src={bg}
            alt="background image"
            aria-label="hidden"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
        <Outlet />
        <Toaster position="bottom-right" />
      </div>
    </>
  );
}
