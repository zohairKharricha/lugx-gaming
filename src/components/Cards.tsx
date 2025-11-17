import { ITrendGame } from "../interfaces";
import GameCard from "./GameCard";

interface IProps {
  itemsData: ITrendGame[];
}
function Cards({itemsData}: IProps) {
  // ** State ** //

  // ** render ** //
  const renderCards = itemsData.map((item, idx) => (
    <GameCard item={item} img={item.img} category={item.category} title={item.title} key={idx} />
  ));
  return (
    <div className="container grid grid-cols-1 gap-10 my-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {renderCards}
    </div>
  );
}

export default Cards;
