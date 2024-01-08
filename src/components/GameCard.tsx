import {FaBagShopping} from "react-icons/fa6";
import Badge from "./ui/Badge";
import {ITrendGame} from "../interfaces";
interface IProps extends ITrendGame {
  item: ITrendGame;
}
function GameCard({item}: IProps) {
  return (
    <div className="group cursor-pointer">
      <div className="max-w-full relative">
        <Badge className="absolute top-3 right-3" prevPrice={item.prevPrice}>
          ${item.currentPrice}
        </Badge>
        <img
          src={item.img}
          alt={item.title}
          width={"100%"}
          className="rounded-3xl object-cover "
        />
      </div>
      <div className="p-6 bg-[#eee] rounded-b-3xl">
        <div className="flex justify-between items-center ">
          <div>
            <p className="text-sm text-gray-400">
              {item.category[0].toUpperCase() + item.category.slice(1)}
            </p>
            <h4 className="font-bold text-xl group-hover:text-blue duration-500">
              {item.title[0].toUpperCase() + item.title.slice(1)}
            </h4>
          </div>
          <div className="h-10 w-10 rounded-full bg-rose group-hover:bg-blue  duration-500 inline-flex justify-center items-center">
            <FaBagShopping color="#fff" size="20" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
