import {useState} from "react";
import {MdOutlineClose} from "react-icons/md";
import {RiMenu2Fill} from "react-icons/ri";
import Button from "./ui/Button";
import NavItem from "./ui/NavItem";

interface IProps {
  children: React.ReactNode;
}

function Navbar({children}: IProps) {
  // ** State ** //
  const [showMenu, setShowMenu] = useState<boolean>(false);

  // ** Handlers ** //
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div id="bg-banner" className=" w-full rounded-b-[150px] ">
      <header className="transparent relative py-4 rounded-b-3xl ">
        {/* DESKTOP NAV */}
        <nav className="md:text-[0.8rem] lg:text-base hidden container md:flex items-center justify-between">
          <img src="images/logo.png" alt="logo" />
          <ul className="flex flex-col md:flex-row  md:space-x-2 text-center text-white">
            <NavItem path="/">Home</NavItem>
            <NavItem path="/shop">Our Shop</NavItem>
            <NavItem path="/product-details">Product Details</NavItem>
            <NavItem path="/contact">Contact Us</NavItem>
            <Button>SIGN IN</Button>
          </ul>
        </nav>
        {/* MOBILE NAV */}
        <nav className="md:hidden container flex items-center justify-between  ">
          <img src="images/logo.png" alt="logo" />
          <ul
            className={
              showMenu
                ? "flex flex-col rounded-b-3xl bg-white text-center min-w-[90%] duration-500 flex-shrink absolute top-[100%] left-[50%] translate-x-[-50%] "
                : "absolute translate-y-[-500%] left-[50%] translate-x-[-50%]"
            }
          >
            <NavItem
              path="/"
              className="hover:text-rose border-b border-[#ddd]"
            >
              Home
            </NavItem>
            <NavItem
              path="/shop"
              className="hover:text-rose border-b border-[#ddd]"
            >
              Our Shop
            </NavItem>
            <NavItem
              path="/product-details"
              className="hover:text-rose border-b border-[#ddd]"
            >
              Product Details
            </NavItem>
            <NavItem
              path="/contact"
              className="hover:text-rose border-b border-[#ddd]"
            >
              Contact Us
            </NavItem>
            <li className="py-2 px-4 duration-300 hover:text-rose">SIGN IN</li>
          </ul>
          <div onClick={handleMenu} className="cursor-pointer">
            {showMenu ? (
              <MdOutlineClose color="white" size="40" />
            ) : (
              <RiMenu2Fill color="white" size="40" />
            )}
          </div>
        </nav>
      </header>

      {children}
    </div>
  );
}

export default Navbar;
