'use client'

import { FilterIcon } from '@/components/common/Icons'
import T from '@/utils/getT'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react'
import { useState } from 'react'
import ButtonClose from './ButtonClose'
import ButtonPrimary from './ButtonPrimary'
import ButtonThird from './ButtonThird'
import Checkbox from './Checkbox'

// DEMO DATA
const typeOfPaces = [
	{
		name: 'Entire place',
		description: 'Have a place to yourself',
	},
	{
		name: 'Private room',
		description: 'Have your own room and share some common spaces',
	},
	{
		name: 'Hotel room',
		description:
			'Have a private or shared room in a boutique hotel, hostel, and more',
	},
	{
		name: 'Shared room',
		description: 'Stay in a shared space, like a common room',
	},
]

const moreFilter1 = [
	{ name: 'Kitchen', defaultChecked: true },
	{ name: 'Air conditioning', defaultChecked: true },
	{ name: 'Heating' },
	{ name: 'Dryer' },
	{ name: 'Washer' },
	{ name: 'Wifi' },
	{ name: 'Indoor fireplace' },
	{ name: 'Breakfast' },
	{ name: 'Hair dryer' },
	{ name: 'Dedicated workspace' },
]

const moreFilter2 = [
	{ name: 'Free parking on premise' },
	{ name: 'Hot tub' },
	{ name: 'Gym' },
	{ name: 'Pool' },
	{ name: 'EV charger' },
]

const moreFilter3 = [
	{ name: 'House' },
	{ name: 'Bed and breakfast' },
	{ name: 'Apartment', defaultChecked: true },
	{ name: 'Boutique hotel' },
	{ name: 'Bungalow' },
	{ name: 'Chalet', defaultChecked: true },
	{ name: 'Condominium', defaultChecked: true },
	{ name: 'Cottage' },
	{ name: 'Guest suite' },
	{ name: 'Guesthouse' },
]

const moreFilter4 = [{ name: 'Pets allowed' }, { name: 'Smoking allowed' }]

const TabFilters = () => {
	const [isOpenMoreFilter, setisOpenMoreFilter] = useState(false)
	const [isOpenMoreFilterMobile, setisOpenMoreFilterMobile] = useState(false)
	const [rangePrices, setRangePrices] = useState([0, 1000])

	//
	const closeModalMoreFilter = () => setisOpenMoreFilter(false)
	const openModalMoreFilter = () => setisOpenMoreFilter(true)

	const renderMoreFilterItem = (
		data: {
			name: string
			defaultChecked?: boolean
		}[],
	) => {
		const list1 = data.filter((_, i) => i < data.length / 2)
		const list2 = data.filter((_, i) => i >= data.length / 2)
		return (
			<div className="grid grid-cols-2 gap-4">
				<div className="flex flex-col space-y-5">
					{list1.map((item) => (
						<Checkbox
							key={item.name}
							name={item.name}
							label={item.name}
							defaultChecked={!!item.defaultChecked}
						/>
					))}
				</div>
				<div className="flex flex-col space-y-5">
					{list2.map((item) => (
						<Checkbox
							key={item.name}
							name={item.name}
							label={item.name}
							defaultChecked={!!item.defaultChecked}
						/>
					))}
				</div>
			</div>
		)
	}

	return (
		<div className="flex lg:gap-x-4">
			<div>
				{/* <div
					className="flex cursor-pointer items-center justify-center rounded-full border border-primary-500 bg-primary-50 px-4 py-2 text-sm text-primary-700 focus:outline-none"
					onClick={openModalMoreFilter}
				>
					<FunnelIcon className="me-2 h-5 w-5" />
					<span>
						{T['common']['Filters']}
						{`  `}
						(3)
					</span>
				</div> */}
				<div
					className="flex h-[38.89px] cursor-pointer items-center justify-center gap-x-1.5 rounded-[65.12px] bg-custom-red px-4 capitalize text-white"
					onClick={openModalMoreFilter}
				>
					<FilterIcon />
					<span className="text-[16.08px]">filter</span>
				</div>

				<Dialog
					open={isOpenMoreFilter}
					onClose={closeModalMoreFilter}
					className="relative z-50"
				>
					<DialogBackdrop
						transition
						className="fixed inset-0 bg-black/50 duration-200 ease-out data-[closed]:opacity-0"
					/>
					<div className="fixed inset-0 flex max-h-screen w-screen items-center justify-center p-4">
						<DialogPanel
							className="flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl duration-200 ease-out data-[closed]:translate-y-16 data-[closed]:opacity-0 dark:border dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
							transition
						>
							<div className="relative flex-shrink-0 border-b border-neutral-200 px-6 py-4 text-center dark:border-neutral-800">
								<DialogTitle
									as="h3"
									className="font-medium text-lg leading-6 text-gray-900"
								>
									{T['common']['Filters']}
								</DialogTitle>
								<span className="absolute start-3 top-3">
									<ButtonClose onClick={closeModalMoreFilter} />
								</span>
							</div>

							<div className="hiddenScrollbar flex-1 overflow-y-auto">
								<div className="divide-y divide-neutral-200 px-10 text-start dark:divide-neutral-800">
									<div className="py-7">
										<h3 className="font-medium text-xl">Amenities</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter1)}
										</div>
									</div>
									<div className="py-7">
										<h3 className="font-medium text-xl">Facilities</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter2)}
										</div>
									</div>
									<div className="py-7">
										<h3 className="font-medium text-xl">Property type</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter3)}
										</div>
									</div>
									<div className="py-7">
										<h3 className="font-medium text-xl">House rules</h3>
										<div className="relative mt-6">
											{renderMoreFilterItem(moreFilter4)}
										</div>
									</div>
								</div>
							</div>

							<div className="flex flex-shrink-0 items-center justify-between bg-neutral-50 p-6 dark:border-t dark:border-neutral-800 dark:bg-neutral-900">
								<ButtonThird
									onClick={closeModalMoreFilter}
									sizeClass="px-4 py-2.5 sm:px-5"
								>
									{T['common']['Clear']}
								</ButtonThird>
								<ButtonPrimary
									onClick={closeModalMoreFilter}
									sizeClass="px-4 py-2.5 sm:px-5"
								>
									{T['common']['Apply']}
								</ButtonPrimary>
							</div>
						</DialogPanel>
					</div>
				</Dialog>
			</div>
		</div>
	)
}

export default TabFilters
