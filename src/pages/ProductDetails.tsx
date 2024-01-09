import DescRevCard from "../components/DescRevCard";
import Footer from "../components/Footer";
import ProdDetails from "../components/ProdDetails";
import ProdsRelatedGames from "../components/ProdsRelatedGames";

function ProductDetailsPage() {
  return (
    <>
      <div className="container">
        <ProdDetails />
        <hr />
        <DescRevCard />
        <ProdsRelatedGames />
      </div>
      <Footer />
    </>
  );
}

export default ProductDetailsPage;
