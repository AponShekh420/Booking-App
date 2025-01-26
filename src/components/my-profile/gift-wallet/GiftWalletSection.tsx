import RedButton from "../RedButton";
import Card from "./Card";


const GiftWalletSection = () => {
  return (
    <div>
    <div className="mt-[54px]">
      <Card/>
      <div className="w-11/12 m-auto lg:mt-16 mt-10">
        <h3 className="lg:text-[32px] font-bold text-2xl">Give the Gift of Self-Care</h3>
        <p className="lg:text-[23.2px] text-md lg:leading-9 lg:mt-3 mt-1 leading-6">Surprise someone with a Gentlemend gift card—redeemable at any of our partner clinics!</p>
        <RedButton title="Send gift card" className="mt-7"/>
      </div>
    </div>
  </div>
  );
}

export default GiftWalletSection;