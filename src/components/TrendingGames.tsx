import {FaBagShopping} from "react-icons/fa6";
import Badge from "./ui/Badge";
import Button from "./ui/Button";
type TtrendGames = {
  prevPrice: number | null;
  currentPrice: number;
  img: string;
  category: string;
  title: string;
};

function TrendingGames() {
  const trendGames: TtrendGames[] = [
    {
      prevPrice: 28,
      currentPrice: 20,
      img: "/images/trending-01.jpg",
      category: "action",
      title: "Warframe  ",
    },
    {
      prevPrice: null,
      currentPrice: 44,
      img: "/images/trending-02.jpg",
      category: "anime",
      title: "Genshin Impact",
    },
    {
      prevPrice: 64,
      currentPrice: 44,
      img: "/images/trending-03.jpg",
      category: "action ",
      title: "Fight Game",
    },
    {
      prevPrice: null,
      currentPrice: 32,
      img: "/images/trending-04.jpg",
      category: "survival ",
      title: "Dragon Fire",
    },
  ];
  // ** render ** // mt-32

  const renderTrandingGames = trendGames.map((item, idx) => (
    <div key={idx} className="group">
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
  ));
  return (
    <div className="mt-32 container">
      <div className="md:flex justify-between items-center">
        <div className="text-center md:text-left">
          <p className="font-bold text-rose">TRENDING</p>
          <h2 className="mt-5 font-bold text-3xl ">Trending Games</h2>
        </div>
        <Button className="hidden md:block">View All</Button>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {renderTrandingGames}
      </div>
    </div>
  );
}

export default TrendingGames;
