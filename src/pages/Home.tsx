import FeatureCard from "../components/FeatureCard";
import Footer from "../components/Footer";
import ShopNewsLetterSec from "../components/ShopNewsLetterSec";
import TopCategories from "../components/TopCategories";
import TopGames from "../components/TopGames";
import TrendingGames from "../components/TrendingGames";

function HomePage() {
  return (
    <>
      <div className="mt-[-80px]">
        <FeatureCard />
      </div>
      <TrendingGames />
      <div className="bg-[#f7f7f7] rounded-[150px]    ">
        <TopGames />
      </div>
      <TopCategories />
      <ShopNewsLetterSec />
      <Footer />
    </>
  );
}

export default HomePage;
