import {useState} from "react";
import Cards from "../components/Cards";
import TrendingFilter from "../components/TrendingFilter";
import {all} from "../data";
import {ITrendGame} from "../interfaces";
import Footer from "../components/Footer";

function ShopPage() {
  // ** states ** //

  const [itemsData, setItemsData] = useState<ITrendGame[]>(all);

  // ** handlers ** //
  const filterCategory = (category: string) => {
    if (category === "Show All") {
      setItemsData(all);
    }
    //  else if (category === "Anime") {
    //   setItemsData(all.filter((item) => item.category === "anime"));
    // }
    else {
      console.log("else case");

      // const filteredData = all.filter((item) => {
      //   console.log(
      //     item.category[0].toUpperCase() + item.category.slice(1),
      //     category
      //   );
      //   console.log(
      //     item.category[0].toUpperCase() + item.category.slice(1) === category
      //   );
      // });
      const filteredData = all.filter(
        (item) =>
          item.category[0].toUpperCase() + item.category.slice(1) === category
      );

      setItemsData(filteredData);
    }
  };
  return (
    <div className="mt-32">
      <TrendingFilter filterCategory={filterCategory} />
      <Cards itemsData={itemsData} />
      <Footer />
    </div>
  );
}

export default ShopPage;
