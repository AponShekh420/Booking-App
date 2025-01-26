import ProfileHeading from "../ProfileHeading";
import Card from "./Card";


const FavouritesSection = () => {
  return (
    <div>
    <div className="mt-[54px]">
      <ProfileHeading title="Your Favourite Clinics "/>
      <div className="grid xl:grid-cols-2 grid-cols-1 lg:mt-12 mt-10 gap-3">
        {
          [1, 2, 3, 4].map((item, index)=> (
            <Card key={index} title="Dermamina" location="114 New Cavendish St, London" rating={5.0} ratingNumber={1328}/>
          ))
        }
      </div>

      <ProfileHeading title="Your Favourite Articles" className="lg:mt-16 mt-10"/>


      <div className="lg:mt-6 mt-3 sm:mt-1 w-11/12 m-auto">

        <div className="py-4 border-b-[#9B9B9B] border-b mb-7">
          <h2 className="lg:text-[32px] text-2xl sm:text-[28px] font-bold">Turn back time</h2>
          <div className="flex justify-between items-center lg:mt-3 sm:mt-1 mt-0 gap-x-5">
            <p className="lg:text-[23.2px] text-md sm:text-lg">Turn back time Explore facial rejuvenation treatments</p>
            <p className="lg:text-[16px] text-sm font-bold whitespace-nowrap">jan 2025</p>
          </div>
        </div>

        <div className="py-4 border-b-[#9B9B9B] border-b mb-7">
          <h2 className="lg:text-[32px] text-2xl sm:text-[28px] font-bold">Turn back time</h2>
          <div className="flex justify-between items-center lg:mt-3 sm:mt-1 mt-0 gap-x-5">
            <p className="lg:text-[23.2px] text-md sm:text-lg">Turn back time Explore facial rejuvenation treatments</p>
            <p className="lg:text-[16px] text-sm font-bold whitespace-nowrap">jan 2025</p>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}

export default FavouritesSection;