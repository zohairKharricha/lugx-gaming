import Button from "./ui/Button";

function TopGames() {
  const topGames = [
    {
      img: "/images/top-game-01.jpg",
      category: "action",
      title: "Warframe  ",
    },
    {
      img: "/images/top-game-02.jpg",
      category: "anime",
      title: "Pubg",
    },
    {
      img: "/images/top-game-03.jpg",
      category: "action ",
      title: "Apex",
    },
    {
      img: "/images/top-game-04.jpg",
      category: "survival ",
      title: "Sims 4",
    },
    {
      img: "/images/top-game-05.jpg",
      category: "survival ",
      title: "Lost Ark",
    },
    {
      img: "/images/top-game-06.jpg",
      category: "survival ",
      title: "Destiny",
    },
  ];
  // ** render ** //
  const renderTopGames = topGames.map((item, idx) => (
    <div key={idx} className="group">
      <div className="max-w-full  ">
        <img
          src={item.img}
          alt={item.title}
          width={"100%"}
          className="rounded-3xl object-cover "
        />
      </div>
      <div className="bg-white px-4 py-6 rounded-b-3xl relative flex flex-col justify-center items-center">
        <p className="text-sm text-gray-400">
          {item.category[0].toUpperCase() + item.category.slice(1)}
        </p>
        <h4 className="font-bold text-xl group-hover:text-blue duration-500">
          {item.title[0].toUpperCase() + item.title.slice(1)}
        </h4>
        <Button className="absolute bottom-0 translate-y-[50%]">explore</Button>
      </div>
    </div>
  ));
  return (
    <div className="mt-32 py-24 container text-center">
      <div className="md:flex justify-between items-center">
        <div className="text-center md:text-left">
          <p className="font-bold text-rose">TOP GAMES</p>
          <h2 className="mt-5 font-bold text-3xl ">Most Played</h2>
        </div>
        <Button className="hidden md:block">View All</Button>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {renderTopGames}
      </div>
    </div>
  );
}

export default TopGames;
