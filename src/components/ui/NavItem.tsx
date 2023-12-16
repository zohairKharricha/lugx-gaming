import {RefAttributes} from "react";
import {NavLink} from "react-router-dom";

interface IProps extends RefAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  path: string;
  className?: string;
}

function NavItem({className, children, path, ...rest}: IProps) {
  return (
    <NavLink
      to={path}
      className={`${className} py-2 px-4 duration-300`}
      {...rest}
    >
      {children}
    </NavLink>
  );
}

export default NavItem;
