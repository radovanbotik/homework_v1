import { Outlet } from "react-router";
import { Navbar } from "../components/navigation/Navbar";
import bg from "../assets/bg.png";

export default function RootLayout() {
  return (
    <div className="relative h-dvh isolate">
      <img src={bg} alt="background image" aria-label="hidden" className="w-full h-full absolute object-cover -z-10" />
      <Navbar />
      <Outlet />
    </div>
  );
}
