'use client'
import Wrapper from '@/components/common/Wrapper'
import { useState } from 'react'
import CheckOutBox from '../CheckoutBox'
import ClinicHeadingText from '../ClinicHeadingText'
import Item from './Item'
import ServicesTabFilter from './ServicesTabFilter'
import CartMobile from '../CartMobile'

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
		<Wrapper className="my-5 md:my-[40px] md:min-h-screen lg:my-[79px]">
			<div className="flex flex-col-reverse justify-between gap-x-8 md:flex-row">
				<div className="w-full md:w-7/12">
					{/* title */}
					<div className="flex items-center justify-between">
						<ClinicHeadingText tag="h1" title="Services" />
						<div>
							<ServicesTabFilter />
						</div>
					</div>

					{/* buttons list */}
					<div className="mt-5 flex flex-wrap gap-3">
						<button
							className="rounded-[80.12px] bg-black px-4 py-1 text-[13.07px] capitalize text-white transition-all duration-300 hover:bg-custom-red md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px]"
							onClick={handleTab}
						>
							Skin
						</button>
						<button
							className="rounded-[80.12px] bg-black px-4 py-1 text-[13.07px] capitalize text-white transition-all duration-300 hover:bg-custom-red md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px]"
							onClick={handleTab}
						>
							Hair
						</button>
						<button
							className="rounded-[80.12px] bg-black px-4 py-1 text-[13.07px] capitalize text-white transition-all duration-300 hover:bg-custom-red md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px]"
							onClick={handleTab}
						>
							Health
						</button>
						<button
							className="rounded-[80.12px] bg-black px-4 py-1 text-[13.07px] capitalize text-white transition-all duration-300 hover:bg-custom-red md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px]"
							onClick={handleTab}
						>
							Rejuvenation
						</button>
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
					<CartMobile path='/clinic/team'/>
				</div>

				<div className="mb-0 hidden w-full md:block md:w-5/12">
					<CheckOutBox path={'/clinic/team'} />

					{/* outline box below of the booking card */}
					<div className="mt-3 hidden w-full items-center justify-between rounded-[10px] border border-[#9B9B9B] p-4 md:flex">
						<div>
							<p className="text-[24px] font-bold md:text-[18px] lg:text-xl">
								Gift Vouchers
							</p>
							<p className="md:text-[14px] lg:text-[16px]">
								Treat yourself or a friend
							</p>
						</div>
						<button className="rounded-[80.12px] bg-black px-4 py-1 text-[13.07px] font-semibold capitalize text-white transition-all duration-300 hover:bg-custom-red md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px]">
							Add
						</button>
					</div>
					<div className="mt-3 hidden w-full items-center justify-between rounded-[10px] border border-[#9B9B9B] p-4 md:flex">
						<div>
							<p className="text-[24px] font-bold md:text-[18px] lg:text-xl">
								Memberships
							</p>
							<p className="md:text-[14px] lg:text-[16px]">
								Treat yourself or a friend
							</p>
						</div>
						<button className="rounded-[80.12px] bg-black px-4 py-1 text-[13.07px] font-semibold capitalize text-white transition-all duration-300 hover:bg-custom-red md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px]">
							Add
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	)
}

export default BookingSection
