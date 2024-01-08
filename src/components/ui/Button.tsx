import {ButtonHTMLAttributes} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  font?: "font-bold" | "font-normal";
  transform?: "uppercase" | "lowercase";
}

function Button({
  className,
  font = "font-bold",
  transform = "uppercase",
  children,
  ...rest
}: IProps) {
  return (
    <button
      className={`${className} ${transform} ${font} flex items-center bg-rose py-2 px-4 rounded-full group-hover:bg-blue hover:bg-blue duration-500 text-white`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
