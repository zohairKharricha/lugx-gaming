import Button from "./ui/Button";

function ContactHero() {
  return (
    <div className="my-32 flex gap-y-12 flex-col 1024px:flex-row items-center lg:gap-x-6">
      <div className="1024px:w-1/2 bg-[#f7f7f7] space-y-16 p-16 rounded-3xl">
        <div>
          <p className="font-bold text-rose">CONTACT US</p>
          <h2 className="mt-5 font-bold text-4xl">Say Hello!</h2>
        </div>

        <p className="text-[#4a4a4a]">
          LUGX Gaming Template is based on the latest Bootstrap 5 CSS framework.
          This template is provided by TemplateMo and it is suitable for your
          gaming shop ecommerce websites. Feel free to use this for any purpose.
          Thank you.
        </p>
        <div className="text-[#aaaaaa] space-y-5 ">
          <div>
            <h4 className="font-bold text-[#4a4a4a] ">Address</h4>
            <p className="text-lg ">
              Sunny Isles Beach, FL 33160, United States
            </p>
          </div>
          <div>
            <h4 className="font-bold text-[#4a4a4a] ">Phone</h4>
            <p className="text-lg ">+123 456 7890</p>
          </div>
          <div>
            <h4 className="font-bold text-[#4a4a4a] ">Email</h4>
            <p className="text-lg ">lugx@contact.com</p>
          </div>
        </div>
      </div>
      <div className="1024px:w-1/2  1024px:px-8">
        <div className="overflow-hidden rounded-3xl w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d142455.87393232912!2d-80.125991!3d25.949796!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9add4b4ac788f%3A0xe77469d09480fcdb!2sSunny%20Isles%20Beach!5e1!3m2!1sen!2sth!4v1704758323767!5m2!1sen!2sth"
            className="w-full 1024px:w-full"
            height="350"
            style={{
              border: "0",
            }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-12 space-y-10">
          <div className="flex flex-col md:flex-row gap-y-10 gap-x-4 ">
            <input
              type="text"
              placeholder="Your Name..."
              className="rounded-3xl py-3 pl-4 outline-none bg-[#f7f7f7] ring-1 ring-[#e7e7e7] focus:ring-2 focus:ring-black flex-grow"
            />
            <input
              type="text"
              placeholder="Your Surname..."
              className="rounded-3xl py-3 pl-4 outline-none bg-[#f7f7f7] ring-1 ring-[#e7e7e7] focus:ring-2 focus:ring-black flex-grow"
            />
          </div>
          <div className="flex  flex-col md:flex-row gap-y-10 gap-x-4">
            <input
              type="text"
              placeholder="Your E-mail..."
              className="rounded-3xl py-3 pl-4 outline-none bg-[#f7f7f7] ring-1 ring-[#e7e7e7] focus:ring-2 focus:ring-black flex-grow"
            />
            <input
              type="text"
              placeholder="Subject..."
              className="rounded-3xl py-3 pl-4 outline-none bg-[#f7f7f7] ring-1 ring-[#e7e7e7] focus:ring-2 focus:ring-black flex-grow"
            />
          </div>
          <textarea
            cols={40}
            rows={5}
            className="block bg-[#f7f7f7]  ring-1 ring-[#e7e7e7] focus:ring-2 focus:ring-black w-full rounded-2xl"
          ></textarea>
          <Button>send message now</Button>
        </div>
      </div>
    </div>
  );
}

export default ContactHero;
