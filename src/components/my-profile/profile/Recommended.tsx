import ProfileHeading from "../ProfileHeading";
import cardDemo from '@/data/cardDemo'
import CardCategory from "./CardCategory";

const Recommended = () => {
  return (
    <div className="w-full">
      <ProfileHeading className="mt-10 mb-5" title="Recommended for you"/>


      <div className="w-11/12 m-auto grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-3 gap-5">
        {cardDemo.slice(0, 4).map((item, index) => (
          <CardCategory taxonomy={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Recommended;