import Badge from "./ui/Badge";
import Button from "./ui/Button";

function Landing() {
  return (
    <>
      <div className="text-center md:text-left text-white md:flex items-center justify-between">
        <div className="md:w-1/2">
          <h6 className="text-xl font-semibold uppercase">Welcome to lugx</h6>
          <h2 className="text-4xl  font-bold mt-6">BEST GAMING SITE EVER!</h2>
          <p className="leading-7  text-[18px] mt-16">
            LUGX Gaming is free Bootstrap 5 HTML CSS website template for your
            gaming websites. You can download and use this layout for commercial
            purposes. Please tell your friends about TemplateMo.
          </p>
          <div className="flex relative mt-16  ">
            <input
              className="py-4 w-full px-4 rounded-full focus:outline-none focus:ring-4 focus:ring-blue/40"
              placeholder="Type Something"
              type="text"
            />
            <Button className="absolute py-4 right-0 top-0">Search Now</Button>
          </div>
        </div>
        <div className="max-w-full relative md:max-w-md mt-16   flex-1 ">
          <Badge className="absolute top-3 right-3 " rounded="rounded-full">
            $23
          </Badge>
          <Badge
            className="absolute bottom-0 text-3xl left-0 w-[100px] h-[100px] z-50 inline-flex justify-center items-center translate-x-[-50%] translate-y-[50%]"
            rounded="rounded-full"
            bg="bg-rose"
          >
            -40%
          </Badge>
          <img
            src="/images/banner-image.jpg"
            className="w-full md:w-[100%] rounded-3xl "
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Landing;
