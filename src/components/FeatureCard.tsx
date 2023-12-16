function FeatureCard() {
  const data: {img: string; title: string}[] = [
    {
      img: "/images/featured-01.png",
      title: "Free Storage",
    },
    {
      img: "/images/featured-02.png",
      title: "User More",
    },
    {
      img: "/images/featured-03.png",
      title: "Reply Ready",
    },
    {
      img: "/images/featured-04.png",
      title: "Easy Layout",
    },
  ];
  // ** Render ** //
  const renderFeatureCards = data.map((item, idx) => {
    return (
      <div
        key={idx}
        className="group p-9 cursor-pointer my-3 mx-3 bg-white rounded-3xl text-center  shadow-xl flex-grow"
      >
        <div className="bg-blue group-hover:bg-rose duration-500 w-[90px] h-[90px] rounded-full inline-flex items-center justify-center">
          <img src={item.img} alt={item.title} />
        </div>
        <h2 className="text-3xl pt-6">{item.title}</h2>
      </div>
    );
  });
  return (
    <div className=" container flex justify-between flex-wrap   ">
      {renderFeatureCards}
    </div>
  );
}

export default FeatureCard;
