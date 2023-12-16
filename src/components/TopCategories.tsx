function TopCategories() {
  const categories = [
    {
      img: "/images/categories-01.jpg",
      category: "Action",
    },
    {
      img: "/images/categories-05.jpg",
      category: "Anime",
    },
    {
      img: "/images/categories-03.jpg",
      category: "Science",
    },
    {
      img: "/images/categories-04.jpg",
      category: "Survival",
    },
    {
      img: "/images/categories-05.jpg",
      category: "Adventure",
    },
  ];

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
    <div className="mt-32 container">
      <div className="text-center ">
        <p className="font-bold text-rose">CATEGORIES</p>
        <h2 className="mt-5 font-bold text-3xl ">Top Categories</h2>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10">
        {renderCategories}
      </div>
    </div>
  );
}

export default TopCategories;
