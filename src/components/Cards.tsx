import {IData} from "../interfaces";
import GameCard from "./GameCard";

interface IProps {
  itemsData: IData[];
}
function Cards({itemsData}: IProps) {
  // ** State ** //

  // ** render ** //
  const renderCards = itemsData.map((item, idx) => (
    <GameCard item={item} key={idx} />
  ));
  return (
    <div className="my-16 container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {renderCards}
    </div>
  );
}

export default Cards;
