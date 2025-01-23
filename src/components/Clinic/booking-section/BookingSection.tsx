"use client"
import Wrapper from '@/components/common/Wrapper'
import ClinicHeadingText from '../ClinicHeadingText'
import Item from './Item'
import CheckOutBox from '../CheckoutBox'
import { useState } from 'react'


const Services_DEMO = {
	skin: [
		{
			id: 1,
			title: 'HydraGlow Facial Treatment',
			price: 350,
			time: '1h',
		},
		{
			id: 2,
			title: 'Anti-Aging PRP Skin Therapy',
			price: 550,
			time: '1h 30m',
		},
		{
			id: 3,
			title: 'Dermaplaning and Skin Resurfacing',
			price: 300,
			time: '1h',
		},
		{
			id: 4,
			title: 'Acne Scar Removal Therapy',
			price: 450,
			time: '1h',
		},
		{
			id: 5,
			title: 'Radiance Boost Vitamin Facial',
			price: 250,
			time: '45m',
		},
	],
	hair: [
		{
			id: 1,
			title: 'PRP Hair Loss Treatment',
			price: 200,
			time: '1h',
		},
		{
			id: 2,
			title: 'Non Surgical Nose Job',
			price: 400,
			time: '1h',
		},
		{
			id: 3,
			title: 'Skinpen® Microneedling + Exosomes Face & Hair',
			price: 850,
			time: '1h',
		},
		{
			id: 4,
			title: 'Profhilo Face or Neck',
			price: 300,
			time: '1h',
		},
		{
			id: 5,
			title: 'PRP Hair Loss Treatment',
			price: 200,
			time: '1h',
		},
	],
	health: [
		{
			id: 1,
			title: 'Vitamin Infusion Therapy',
			price: 180,
			time: '30m',
		},
		{
			id: 2,
			title: 'Immune System Boost Treatment',
			price: 220,
			time: '45m',
		},
		{
			id: 3,
			title: 'Chronic Pain Relief Session',
			price: 300,
			time: '1h',
		},
		{
			id: 4,
			title: 'Energy Rejuvenation Therapy',
			price: 250,
			time: '1h',
		},
		{
			id: 5,
			title: 'Detox and Hydration Session',
			price: 200,
			time: '45m',
		},
	],
	rejuvenation: [
		{
			id: 1,
			title: 'Collagen Boost Facial',
			price: 400,
			time: '1h',
		},
		{
			id: 2,
			title: 'Under Eye Revitalization',
			price: 350,
			time: '45m',
		},
		{
			id: 3,
			title: 'Neck and Jawline Firming',
			price: 500,
			time: '1h 15m',
		},
		{
			id: 4,
			title: 'Full Body Rejuvenation Package',
			price: 1200,
			time: '3h',
		},
		{
			id: 5,
			title: 'Hydration and Glow Therapy',
			price: 300,
			time: '1h',
		},
	],
}

interface Service {
	id: number
	title: string
	price: number
	time: string
}


const BookingSection = () => {
  const [cardListData, setCardListData] = useState<Service[]>(
      Services_DEMO.skin,
    )
  const handleTab = (event: React.MouseEvent<HTMLButtonElement>) => {
    const currentElement = event.target as HTMLButtonElement
    const currentElementText = currentElement.innerText.toLowerCase()
    currentElement.parentElement?.querySelectorAll('button').forEach((el) => {
      el.classList.add('bg-black')
      el.classList.remove('bg-custom-red')
    })
    currentElement.classList.remove('bg-black')
    currentElement.classList.add('bg-custom-red')
    switch (currentElementText) {
      case 'skin':
        setCardListData(Services_DEMO.skin)
        break
      case 'hair':
        setCardListData(Services_DEMO.hair)
        break
      case 'health':
        setCardListData(Services_DEMO.health)
        break
      case 'rejuvenation':
        setCardListData(Services_DEMO.rejuvenation)
        break
      default:
        break
    }
  }
  return (
    <Wrapper className="md:my-[40px] lg:my-[79px] md:min-h-screen my-5">
      <div className="flex gap-x-8 justify-between md:flex-row flex-col-reverse">
        <div className="md:w-7/12 w-full">
          {/* title */}
          <ClinicHeadingText title="Services"/>

          {/* buttons list */}
          <div className="flex flex-wrap gap-3">
            <button className="text-[13.07px] px-4 py-1 lg:py-2 lg:px-7 md:px-5 md:py-1 lg:text-[18.03px] md:text-[14px] bg-black rounded-[80.12px] text-white hover:bg-custom-red transition-all duration-300 capitalize"
						  onClick={handleTab}
            >Skin</button>
            <button className="text-[13.07px] px-4 py-1 lg:py-2 lg:px-7 md:px-5 md:py-1 lg:text-[18.03px] md:text-[14px] bg-black rounded-[80.12px] text-white hover:bg-custom-red transition-all duration-300 capitalize"
						  onClick={handleTab}
            >Hair</button>
            <button className="text-[13.07px] px-4 py-1 lg:py-2 lg:px-7 md:px-5 md:py-1 lg:text-[18.03px] md:text-[14px] bg-black rounded-[80.12px] text-white hover:bg-custom-red transition-all duration-300 capitalize"
						  onClick={handleTab}
            >Health</button>
            <button className="text-[13.07px] px-4 py-1 lg:py-2 lg:px-7 md:px-5 md:py-1 lg:text-[18.03px] md:text-[14px] bg-black rounded-[80.12px] text-white hover:bg-custom-red transition-all duration-300 capitalize"
						  onClick={handleTab}
            >Rejuvenation</button>
          </div>

					{cardListData.map((item) => (
						<Item
							key={item.id}
							title={item.title}
							price={item.price}
							time={item.time}
						/>
					))}

					{/* LAST BUTTON TO SEE MORE */}
					<div className="flex justify-center">
						<button className="mt-10 rounded-[80.12px] bg-black px-7 py-2 text-[18.03px] text-white transition-all duration-300 hover:bg-custom-red">
							See all
						</button>
					</div>

          {/* cart for mobile */}
          <div className="md:hidden block mt-7">
            <hr />
            <div className="flex items-center justify-between">
              <div className="mt-4 text-[15.56px] font-semibold sm:text-[19px]">
                <h5 className="leading-[20.1px]">£200 </h5>
                <p>PRP Hair Loss Treatment</p>
                <span>1hr</span>
              </div>
              <button className="flex h-[41.21px] items-center justify-center rounded-[68.01px] bg-custom-red px-8 text-[16.79px] text-white transition-colors duration-300 hover:bg-black">
                Confirm
              </button>
            </div>
          </div>
				</div>

        <div className="md:w-5/12 w-full mb-0 md:block hidden">
          <CheckOutBox path={"/clinic/team"}/>
          
          {/* outline box below of the booking card */}
          <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4 justify-between mt-3 items-center hidden md:flex">
            <div>
              <p className="lg:text-[24px] md:text-[18px] text-[24px] font-bold">Gift Vouchers</p>
              <p className="lg:text-[16px] md:text-[14px]">Treat yourself or a friend</p>
            </div>
            <button className="lg:text-[23.22px] text-[23.22px] md:text-[18px] md:py-2 md:px-4 lg:py-2 lg:px-6 py-2 px-6 font-semibold bg-black hover:bg-custom-red transition-all duration-300 text-white rounded-[94.05px]">Add</button>
          </div>
          <div className="w-full border rounded-[10px] border-[#9B9B9B] p-4 justify-between mt-3 items-center hidden md:flex">
            <div>
              <p className="lg:text-[24px] md:text-[18px] text-[24px] font-bold">Memberships</p>
              <p className="lg:text-[16px] md:text-[14px]">Treat yourself or a friend</p>
            </div>
            <button className="lg:text-[23.22px] text-[23.22px] md:text-[18px] md:py-2 md:px-4 lg:py-2 lg:px-6 py-2 px-6 font-semibold bg-black hover:bg-custom-red transition-all duration-300 text-white rounded-[94.05px]">Add</button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default BookingSection
