import { DownloadArrowIcon } from "@/components/common/Icons";
import { HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import TreatmentsImageOne from "@/images/article-two/treatments1.png"
import TreatmentsImageTwo from "@/images/article-two/treatments2.png"

const TrunBackSection = () => {
  return (
    <div className="w-full mt-10">
      {/* title */}
      <div>
        <div className="w-full flex justify-between items-center gap-x-4">
          <h1 className="font-heading text-[34.72px] capitalize font-[700] leading-[40.08px] text-black sm:text-[42.72px] sm:leading-[62.08px] md:text-[50.72px] md:leading-[72.08px] lg:text-[58.72px] lg:leading-[82.08px] xl:text-[64.288px] xl:leading-[80.43px]">
          Turn Back Time - <span className="text-custom-red">Facial Rejuvenation Treatments</span>
          </h1>
          <div className="flex gap-x-5 items-start">
            <HeartIcon className="w-8 h-8"/>
            <DownloadArrowIcon className="w-7 h-7"/>
          </div>
        </div>

        <h4 className="font-medium leading-8">
          30th January - Facial Treatments - 2 minute read
				</h4>
      </div>
      {/* title end */}


      {/* article box container */}
      <div className="w-full mt-14">
        {/* box 1 */}
        <div className="flex md:justify-between lg:gap-x-12 md:gap-x-6 flex-col md:flex-row">
          <div className="md:w-6/12 w-full">
            <Image src={TreatmentsImageOne} alt="Treatments" className="w-full h-auto" />
          </div>
          <div className="md:w-6/12 w-full">
            <h4 className="font-bold text-lg xl:text-3xl lg:text-xl mt-3 md:mt-0">What is Facial Rejuvenation?</h4>
            <p className="font-medium mt-2 xl:mt-5 lg:mt-3">Aging is a natural part of life, but it doesn’t mean you can’t look and feel your best at every stage. With modern advancements in aesthetic treatments, facial rejuvenation has become a go-to solution for men looking to restore their youthful appearance and boost their confidence. Here’s everything you need to know about these transformative options and how they can help you turn back time.</p>
          </div>
        </div>
        {/* box 1 end */}


        {/* box 2 */}
        <div className="flex md:justify-between lg:gap-x-12 md:gap-x-6 flex-col md:flex-row mt-20">
          <div className="md:w-6/12 w-full">
            <Image src={TreatmentsImageTwo} alt="Treatments" className="w-full h-auto" />
          </div>
          <div className="md:w-6/12 w-full">
            <h4 className="font-bold text-lg xl:text-3xl lg:text-xl mt-3 md:mt-0">How choose to the best treatment for you?</h4>
            <p className="font-medium mt-2 xl:mt-5 lg:mt-3">Facial rejuvenation treatments are designed to reduce signs of aging, such as wrinkles, fine lines, sagging skin, and uneven texture. They can help refresh your appearance, giving your skin a smoother, firmer, and more youthful look. These treatments range from non-invasive procedures to more advanced options, depending on your goals and needs.</p>
          </div>
        </div>
        {/* box 2 end */}

      </div>

    </div>
  );
}

export default TrunBackSection;