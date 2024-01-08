import {FaBagShopping} from "react-icons/fa6";
import Button from "./ui/Button";

function ProdDetails() {
  return (
    <div className=" my-32 flex flex-col items-center lg:flex-row">
      <div className="lg:w-1/2">
        <img src="./public/images/single-game.jpg" alt="" />
      </div>
      <div className="lg:w-1/2 md:px-16 lg:px-8 space-y-16">
        <div>
          <h4 className="text-3xl font-bold">
            Call of Duty®: Modern Warfare® II
          </h4>
          <p className="mt-4  text-blue font-bold text-3xl">
            <span className="text-base line-through text-gray-400">$28 </span>
            $22
          </p>
        </div>

        <p className="text-lg">
          LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
          This template is provided by TemplateMo and it is suitable for your
          gaming shop ecommerce websites. Feel free to use this for any purpose.
          Thank you.
        </p>
        <div className="flex gap-4">
          <input
            className="w-[80px] outline-none focus: h-[50px] rounded-full text-center bg-[#f7f7f7] ring-2 ring-[#e7e7e7] focus:ring-3 focus:ring-[#c7c7c7] duration-500  "
            value={1}
            type="text"
            readOnly
          />
          <Button>
            <FaBagShopping className="mr-4" color="#fff" size="20" />
            Add To Cart
          </Button>
        </div>
        <div>
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 w-20">Game Id:</p>
            <p className="text-blue">COD MMII</p>
          </div>
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 w-20">Genre:</p>
            <p className="text-blue">Action, Team, Single</p>
          </div>
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 w-20">Multi-tags:</p>
            <p className="text-blue">War, Battle, Royal</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProdDetails;
