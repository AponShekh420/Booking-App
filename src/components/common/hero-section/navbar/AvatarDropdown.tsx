import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from '@headlessui/react'
import { Fragment } from 'react'
import Avatar from '@/shared/Avatar'
import SwitchDarkMode2 from '@/shared/SwitchDarkMode2'
import Link from 'next/link'
import {
	FavouriteIcon,
	HelpSquareIcon,
	Idea01Icon,
	Logout03Icon,
	Task01Icon,
	UserSharingIcon,
} from '@/components/Icons'
import T from '@/utils/getT'
import { AccountIcon, NavIcon } from '@/components/common/Icons'
import DropdownContent from './DropdownContent'
interface Props {
	className?: string
}

export default function AvatarDropdown({ className = '' }: Props) {
	return (
		<>
			<Popover className={`AvatarDropdown relative flex ${className}`}>
				{({ open, close }) => (
					<>
						<PopoverButton
							className={`flex h-[39px] w-[179px] items-center justify-end gap-x-2 focus:outline-none`}
						>
							<div>
								<p className='text-[13.88px] text-white font-[700]'>LONDON, UK</p>
							</div>
							<div className="flex items-center justify-center gap-x-[6.4px] w-[74px] h-[32.17px] rounded-[63.54px] bg-white">
								<NavIcon className='w-[24.17px] h-[18.7px]'/>
								<AccountIcon className='w-[19.2px] h-[19.2px]'/>
							</div>
						</PopoverButton>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<PopoverPanel className="absolute -end-10 top-full w-screen max-w-[260px] px-4 sm:end-0 sm:px-0 z-50">
								<div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-white ring-opacity-5 bg-white py-7">
									<DropdownContent/>
									{/* <SwitchDarkMode2 /> */}
								</div>
							</PopoverPanel>
						</Transition>
					</>
				)}
			</Popover>
		</>
	)
}
