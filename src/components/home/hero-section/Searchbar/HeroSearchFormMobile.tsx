'use client'

import { FC, Fragment, useState } from 'react'
import {
	Dialog,
	DialogPanel,
	Tab,
	TabGroup,
	TabList,
	TabPanel,
	TabPanels,
	Transition,
	TransitionChild,
} from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import ButtonSubmit from './ButtonSubmit'
import StaySearchForm from './StaySearchMobileForm'
import T from '@/utils/getT'


interface HeroFromProps {
	tab: string,
	setTab: React.Dispatch<React.SetStateAction<string>>;
}


const HeroSearchForm2Mobile:FC<HeroFromProps> = ({tab, setTab}) => {
	const variable = tab ? true : false;

	const closeModal = () => {
		setTab("");
	}

	return (
		<div className="HeroSearchForm2Mobile md:hidden block">
			<Transition appear show={variable} as={Fragment}>
				<Dialog
					as="div"
					className="HeroSearchFormMobile__Dialog z-max relative"
					onClose={closeModal}
				>
					<div className="fixed inset-0 bg-neutral-100 dark:bg-neutral-900">
						<div className="flex h-full">
							<TransitionChild
								as={Fragment}
								enter="ease-out transition-transform"
								enterFrom="opacity-0 translate-y-52"
								enterTo="opacity-100 translate-y-0"
								leave="ease-in transition-transform"
								leaveFrom="opacity-100 translate-y-0"
								leaveTo="opacity-0 translate-y-52"
							>
								<DialogPanel className="relative flex-1">
									<div
										className="relative flex h-full flex-1 flex-col justify-between"
									>
										<div className="absolute start-4 top-4">
											<button onClick={closeModal}>
												<XMarkIcon className="h-5 w-5 text-black dark:text-white" />
											</button>
										</div>

										<div className="flex flex-1 overflow-hidden px-1.5 pt-3 sm:px-4">
											<div className="animate-[myblur_0.4s_ease-in-out] transition-opacity">
												<StaySearchForm />
											</div>
										</div>
										<div className="flex justify-between border-t border-neutral-200 bg-white px-4 py-3 dark:border-neutral-700 dark:bg-neutral-900">
											<button
												type="button"
												className="flex-shrink-0 text-sm font-medium underline"
												onClick={() => {
													setTab("")
												}}
											>
												{T['HeroSearchForm']['Clear all']}
											</button>
											<ButtonSubmit onClick={() => closeModal()} />
										</div>
									</div>
								</DialogPanel>
							</TransitionChild>
						</div>
					</div>
				</Dialog>
			</Transition>
		</div>
	)
}

export default HeroSearchForm2Mobile
