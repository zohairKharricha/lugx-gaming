interface IProps {
  children: string | React.ReactNode;
  className?: string;
  bg?: "bg-blue" | "bg-rose";
  rounded?: "rounded-lg" | "rounded-full";
  prevPrice?: number | null;
}

function Badge({
  className,
  bg = "bg-blue",
  rounded = "rounded-lg",
  prevPrice,
  children,
}: IProps) {
  return (
    <span
      className={`${className} ${bg} ${rounded} text-white font-bold  px-4 py-2  text-xl `}
    >
      {prevPrice && (
        <p className="line-through text-sm font-normal text-right">
          ${prevPrice}
        </p>
      )}

      {children}
    </span>
  );
}

export default Badge;
