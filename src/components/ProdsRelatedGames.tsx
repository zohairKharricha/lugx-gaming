import {data} from "../data";
import Button from "./ui/Button";

function ProdsRelatedGames() {
  const categories = data.categories;
  // ** render ** //
  const renderCategories = categories.map((item, idx) => (
    <div
      key={idx}
      className="text-center rounded-[25px] text-white   overflow-hidden bg-blue"
    >
      <h2 className="text-xl font-bold  py-6">{item.category}</h2>
      <div className="rounded-[25px] overflow-hidden">
        <img width={"100%"} src={item.img} alt={item.category} />
      </div>
    </div>
  ));
  return (
    <div>
      <div className="md:flex justify-between items-center">
        <div className="text-center md:text-left">
          <p className="font-bold text-rose">TRENDING</p>
          <h2 className="mt-5 font-bold text-3xl ">Trending Games</h2>
        </div>
        <Button className="hidden md:block">View All</Button>
      </div>
      <div className="my-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {renderCategories}
      </div>
    </div>
  );
}

export default ProdsRelatedGames;
