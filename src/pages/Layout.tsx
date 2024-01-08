import {Outlet, useRoutes} from "react-router-dom";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";
import ShopChild from "../components/ShopChild";
import ProductChild from "../components/ProductChild";
import ContactChild from "../components/ContactChild";

const RootLayout = () => {
  const element = useRoutes([
    {path: "/", element: <Landing />},
    {path: "/shop", element: <ShopChild />},
    {path: "/product-details", element: <ProductChild />},
    {path: "/contact", element: <ContactChild />},

    // Add more routes as needed
  ]);
  return (
    <>
      <Navbar>
        <div className="container pb-44 pt-20">{element}</div>
      </Navbar>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
