import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Landing from "../components/Landing";

const RootLayout = () => {
  return (
    <>
      <Navbar>
        <Landing />
      </Navbar>
      <div className="">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
