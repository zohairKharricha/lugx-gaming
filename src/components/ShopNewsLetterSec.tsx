import Button from "./ui/Button";

/*




*/
function ShopNewsLetterSec() {
  return (
    <div className="mt-32 container  relative  lg:after-bg">
      <div className="flex flex-col gap-10 lg:flex-row lg:justify-around ">
        <div className="bg-[#f7f7f7] rounded-3xl p-8 lg:max-w-[33%] lg:mt-32">
          <h6 className="font-bold text-rose">OUR SHOP</h6>
          <h2 className="leading-8 font-bold text-3xl mt-5">
            Go Pre-Order Buy & Get Best{" "}
            <span className="text-blue"> Prices </span>
            For You!
          </h2>
          <p className="mt-12 text-xl text-gray-400 ">
            Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
            incididunt.
          </p>
          <Button className="mt-12">Shop Now</Button>
        </div>
        <div className="bg-[#f7f7f7] rounded-3xl p-8 lg:max-w-[33%] lg:mt-64">
          <h6 className="font-bold text-rose">NEWSLETTER</h6>
          <h2 className="leading-8 font-bold text-3xl mt-5">
            Get Up To $100 Off Just Buy
            <span className="text-blue"> Subscribe </span>
            Newsletter!
          </h2>
          <div className="block md:flex md:relative mt-16  ">
            <input
              className="py-4 w-full px-4 rounded-full focus:outline-none focus:ring-4 focus:ring-blue/40"
              placeholder="Your email..."
              type="email"
            />
            <Button className="block mt-5 w-full md:w-auto md:m-0 md:absolute py-4 md:right-0 md:top-0">
              Subscribe Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopNewsLetterSec;
