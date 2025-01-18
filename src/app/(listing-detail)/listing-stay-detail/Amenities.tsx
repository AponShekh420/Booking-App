'use client'
import ButtonClose from '@/shared/ButtonClose'
import ButtonSecondary from '@/shared/ButtonSecondary'
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	DialogTitle,
} from '@headlessui/react'
import { useState } from 'react'
import { Amenities_demos } from './constant'

const Amenities = () => {
	let [isOpenModalAmenities, setIsOpenModalAmenities] = useState(false)

	function closeModalAmenities() {
		setIsOpenModalAmenities(false)
	}

	function openModalAmenities() {
		setIsOpenModalAmenities(true)
	}
	const renderModalAmenities = () => {
		return (
			<Dialog
				open={isOpenModalAmenities}
				onClose={closeModalAmenities}
				className="relative z-50 hidden lg:block"
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
								className="text-lg font-medium leading-6 text-gray-900"
							>
								Amenities
							</DialogTitle>
							<span className="absolute start-3 top-3">
								<ButtonClose onClick={closeModalAmenities} />
							</span>
						</div>

						<div className="hiddenScrollbar flex-1 divide-y divide-neutral-200 overflow-y-auto px-8 text-neutral-700 dark:divide-neutral-700 dark:text-neutral-300">
							{Amenities_demos.filter((_, i) => i < 1212).map((item) => (
								<div
									key={item.name}
									className="flex items-center gap-x-5 py-2.5 sm:py-4 lg:gap-x-8 lg:py-5"
								>
									<item.icon className="h-6 w-6" />
									<span>{item.name}</span>
								</div>
							))}
						</div>
					</DialogPanel>
				</div>
			</Dialog>
		)
	}
	return (
		<div className="listingSection__wrap">
			<div>
				<h2 className="text-2xl font-semibold">Amenities </h2>
				<span className="mt-2 block text-neutral-500 dark:text-neutral-400">
					{`About the property's amenities and services`}
				</span>
			</div>
			<div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
			{/* 6 */}
			<div className="grid grid-cols-1 gap-6 text-sm text-neutral-700 dark:text-neutral-300 xl:grid-cols-3">
				{Amenities_demos.filter((_, i) => i < 12).map((item) => (
					<div key={item.name} className="flex items-center gap-x-3">
						<item.icon className="h-6 w-6" />
						<span>{item.name}</span>
					</div>
				))}
			</div>

			{/* ----- */}
			<div className="w-14 border-b border-neutral-200"></div>
			<div>
				<ButtonSecondary onClick={openModalAmenities}>
					View more 20 amenities
				</ButtonSecondary>
			</div>
			{renderModalAmenities()}
		</div>
	)
}
export default Amenities
