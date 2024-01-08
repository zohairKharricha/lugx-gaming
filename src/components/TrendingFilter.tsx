import {useState} from "react";
import FilterBtn from "./ui/FilterBtn";

function TrendingFilter({filterCategory}) {
  const [activeFilter, setActiveFilter] = useState("Show All");

  // ** handlers ** //

  const handleFilterClick: (filter: string) => void = (filter) => {
    setActiveFilter(filter);
  };

  const onFilter = (category: string) => {
    filterCategory(category);
  };

  return (
    <div className="container flex flex-wrap gap-4 justify-center">
      <FilterBtn
        handleFilterClick={handleFilterClick}
        onFilter={onFilter}
        active={activeFilter === "Show All"}
      >
        Show All
      </FilterBtn>
      <FilterBtn
        handleFilterClick={handleFilterClick}
        onFilter={onFilter}
        active={activeFilter === "Anime"}
      >
        Anime
      </FilterBtn>
      <FilterBtn
        handleFilterClick={handleFilterClick}
        onFilter={onFilter}
        active={activeFilter === "Survival"}
      >
        Survival
      </FilterBtn>
      <FilterBtn
        handleFilterClick={handleFilterClick}
        onFilter={onFilter}
        active={activeFilter === "Action"}
      >
        Action
      </FilterBtn>
    </div>
  );
}

export default TrendingFilter;
