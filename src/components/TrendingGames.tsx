import Button from "./ui/Button";
import GameCard from "./GameCard";
import {data} from "../data";

function TrendingGames() {
  const trendGames = data.trendGames;

  // ** render ** // mt-32

  const renderTrendingGames = trendGames.map((item, idx) => (
    <GameCard item={item} {...item} key={idx} />
  ));
  return (
    <div className="container mt-32">
      <div className="items-center justify-between md:flex">
        <div className="text-center md:text-left">
          <p className="font-bold text-rose">TRENDING</p>
          <h2 className="mt-5 text-3xl font-bold ">Trending Games</h2>
        </div>
        <Button className="hidden md:block">View All</Button>
      </div>

      <div className="grid grid-cols-1 gap-10 mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {renderTrendingGames}
      </div>
    </div>
  );
}

export default TrendingGames;
