import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Navbar/Nav";

export default function LayoutPrincipal() {
  return (
    <>
      <Nav />
        <Outlet/>
      <Footer />
    </>
  );
}
