import {useState} from "react";
import FilterBtn from "./ui/FilterBtn";

interface IProps {
  filterCategory: (category: string) => void;
}

function TrendingFilter({filterCategory}: IProps) {
  const [activeFilter, setActiveFilter] = useState("Show All");

  // ** handlers ** //
  const handleFilterClick: (filter: string) => void = (filter) => {
    setActiveFilter(filter);
  };

  const onFilter = (category: string) => {
    filterCategory(category);
  };

  return (
    <div className="container flex flex-wrap justify-center gap-4">
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