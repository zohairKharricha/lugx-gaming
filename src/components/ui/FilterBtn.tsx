import {ButtonHTMLAttributes} from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  font?: "font-bold" | "font-normal";
  transform?: "uppercase" | "lowercase";
  active?: boolean;
  onFilter: (category: string) => void;
  handleFilterClick: (filter: string) => void;
}

function FilterBtn({
  className,
  font = "font-bold",
  transform = "uppercase",
  children,
  active,
  handleFilterClick,
  onFilter,
  ...rest
}: IProps) {
  return (
    <button
      className={`${className} ${transform} ${font}  bg-[#eee] py-2 px-4 rounded-full   duration-500 ${
        active ? "active-btn" : "hover:text-rose"
      }`}
      onClick={() => {
        handleFilterClick(children as string);
        onFilter(children as string);
      }}
      {...rest}
    >
      {children}
    </button>
  );
}

export default FilterBtn;
