import Button from "./ui/Button";
import GameCard from "./GameCard";
import {data} from "../data";

function TrendingGames() {
  const trendGames = data.trendGames;

  // ** render ** // mt-32

  const renderTrendingGames = trendGames.map((item, idx) => (
    <GameCard item={item} key={idx} />
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
        {renderTrendingGames}
      </div>
    </div>
  );
}

export default TrendingGames;
