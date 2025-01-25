import Faq from "./Faq";

const TreatmentBio = () => {
  return (
    <div className="w-full mt-10">
      <h1 className="font-[700] xl:text-[64.288px] xl:leading-[80.43px] text-[34.72px] leading-[52.08px] sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] text-custom-red uppercase">
        YOUR TREATMENT BIO
      </h1>

      <div className="w-11/12 m-auto">
        {/* question */}
        <Faq title="1. What is your level of experience with aesthetic or wellness treatments?" desc="I’m completely new"/>
        <Faq title="2. What are you currently looking for?" desc="General advice or recommendations"/>
        <Faq title="3. What type of treatments are you most interested in?" desc="Facial rejuvenation (e.g., Botox, fillers, facials)."/>
        <Faq title="4. What benefits are you seeking from these treatments?" desc="Addressing a specific concern (e.g., wrinkles, hair loss)."/>
        <Faq title="5. What’s the most important factor when choosing a clinic?" desc="Affordable pricing."/>

        <button className="rounded-[80.12px] hover:bg-black px-4 py-1 text-[13.07px] capitalize text-white transition-all duration-300 bg-custom-red md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px]">
          Save
        </button>
      </div>
    </div>
  );
}

export default TreatmentBio;