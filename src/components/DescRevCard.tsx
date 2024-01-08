import {useState} from "react";

function DescRevCard() {
  const [isDesc, setIsDesc] = useState<boolean>(true);
  return (
    <div className="my-32   p-16 bg-[#f7f7f7] rounded-3xl">
      <div className="flex mb-6   text-2xl items-center cursor-pointer">
        <p
          className={`${isDesc && "text-blue"} px-4 border-r border-[#d7d7d7]`}
          onClick={() => {
            setIsDesc(true);
          }}
        >
          Description
        </p>

        <p
          className={` ${!isDesc && "text-blue"} px-4`}
          onClick={() => {
            setIsDesc(false);
          }}
        >
          Reviews (3)
        </p>
      </div>
      <div className="text-lg text-[#4a4a4a]">
        {isDesc ? (
          <p>
            You can search for more templates on Google Search using keywords
            such as "templatemo digital marketing", "templatemo one-page",
            "templatemo gallery", etc. Please tell your friends about our
            website. If you need a variety of HTML templates, you may visit
            Tooplate and Too CSS websites.
            <br />
            <br />
            Coloring book air plant shabby chic, crucifix normcore raclette cred
            swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify
            truffaut kitsch helvetica jean shorts edison bulb poutine next level
            humblebrag la croix adaptogen. Hashtag poke literally locavore,
            beard marfa kogi bruh artisan succulents seitan tonx waistcoat
            chambray taxidermy. Same cred meggings 3 wolf moon lomo irony cray
            hell of bitters asymmetrical gluten-free art party raw denim
            chillwave tousled try-hard succulents street art.
          </p>
        ) : (
          <p>
            Coloring book air plant shabby chic, crucifix normcore raclette cred
            swag artisan activated charcoal. PBR&B fanny pack pok pok gentrify
            truffaut kitsch helvetica jean shorts edison bulb poutine next level
            humblebrag la croix adaptogen.
            <br />
            <br />
            Hashtag poke literally locavore, beard marfa kogi bruh artisan
            succulents seitan tonx waistcoat chambray taxidermy. Same cred
            meggings 3 wolf moon lomo irony cray hell of bitters asymmetrical
            gluten-free art party raw denim chillwave tousled try-hard
            succulents street art.
          </p>
        )}
      </div>
    </div>
  );
}

export default DescRevCard;
