'use client'

import React, { useState } from 'react'
import ButtonClose from '@/shared/ButtonClose'
import Logo from '@/images/logo/black-logo.svg'

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from '@headlessui/react'
import { NAVIGATION_DEMO } from '@/data/navigation'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Image from 'next/image'

export interface NavMobileProps {
	data?: any
	onClickClose?: () => void
}

const NavMobile: React.FC<NavMobileProps> = ({
	data = NAVIGATION_DEMO,
	onClickClose,
}) => {

  const [active, setActive] = useState<boolean>(true);
	const [userRole, setUserRole] = useState<string>('user')





	const _renderMenuChild = (item: any) => {
		return (
			<ul className="nav-mobile-sub-menu pb-1 ps-6 text-base">
				{item.children?.map((i: any, index: any) => (
					<Disclosure key={i.href + index} as="li">
						<Link
							href={{
								pathname: i.href || undefined,
							}}
							className="mt-0.5 flex rounded-lg px-4 text-sm font-medium text-neutral-900 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-800"
						>
							<span
								className={`py-2.5 pe-3 ${!i.children ? 'block w-full' : ''}`}
							>
								{i.name}
							</span>
							{i.children && (
								<span
									className="flex flex-1"
									onClick={(e) => e.preventDefault()}
								>
									<DisclosureButton
										as="span"
										className="flex flex-1 justify-end py-2.5"
									>
										<ChevronDownIcon
											className="ms-2 h-4 w-4 text-neutral-500"
											aria-hidden="true"
										/>
									</DisclosureButton>
								</span>
							)}
						</Link>
						{i.children && (
							<DisclosurePanel>{_renderMenuChild(i)}</DisclosurePanel>
						)}
					</Disclosure>
				))}
			</ul>
		)
	}

	const _renderItem = (item: any, index: number) => {
		return (
			<Disclosure
				key={item.id}
				as="li"
				className="text-neutral-900 dark:text-white"
			>
				<Link
					className="flex w-full rounded-lg px-4 text-sm font-medium tracking-wide hover:bg-neutral-100 dark:hover:bg-neutral-800 text-black hover:text-custom-red transition-all duration-300 cursor-pointer"
					href={{
						pathname: item.href || undefined,
					}}
				>
					<span
						className={`py-1.5 pe-3 ${!item.children ? 'block w-full' : ''}`}
					>
						{item.name}
					</span>
					{item.children && (
						<span className="flex flex-1" onClick={(e) => e.preventDefault()}>
							<DisclosureButton
								as="span"
								className="flex flex-1 items-center justify-end py-2.5"
							>
								<ChevronDownIcon
									className="ms-2 h-4 w-4 text-neutral-500"
									aria-hidden="true"
								/>
							</DisclosureButton>
						</span>
					)}
				</Link>
				{item.children && (
					<DisclosurePanel>{_renderMenuChild(item)}</DisclosurePanel>
				)}
			</Disclosure>
		)
	}

	return (
		<div className="h-screen w-full overflow-y-auto bg-white py-2 shadow-lg ring-1 dark:bg-neutral-900 dark:ring-neutral-700">
			<div className="px-5 py-6">
        <Link href={"/"} className='mt-5'>
          <Image 
            src={Logo} 
            alt="Logo" 
            width={100} 
            height={100} 
            className="mx-auto lg:w-[266px] lg:h-[57px] w-[150.5px] h-auto xxs:w-[160.5px] xs:w-[170.5px] sm:w-[250px] sm:h-[41px] md:w-[260px] md:h-[51px]"
          />
        </Link>
				<span className="absolute end-2 top-2 p-1">
					<ButtonClose onClick={onClickClose} />
				</span>
			</div>
			<div>
        <div className='flex justify-between px-2'>

          <div className={`w-1/2 border-b-2 ${active ? "border-custom-red" : "border-gray-500"}`} onClick={()=> setActive(true)}>
            <button className={`w-full py-2 font-semibold ${active ? "text-custom-red" : "text-gray-500"}`}>
              Menu
            </button>
          </div>

          <div className={`w-1/2 border-b-2 ${!active ? "border-custom-red" : "border-gray-500"}`} onClick={()=> setActive(false)}>
            <button className={`w-full py-2 font-semibold ${!active ? "text-custom-red" : "text-gray-500"}`}>
              Account
            </button>
          </div>
        </div>

        {active ? (
          <ul className="flex flex-col space-y-1 px-2 py-6">
            {data.map(_renderItem)}
          </ul>
        ) :  (
          <>
            <div className="flex justify-center px-6 mt-8">
              <div className="relative overflow-hidden rounded-[94.89px] bg-[#EBEBEB] shadow-inner shadow-gray-400 w-full">
                <div
                  className={`absolute top-0 z-0 h-full w-6/12 rounded-[94.89px] bg-custom-red transition-transform duration-300 ease-in-out`}
                  style={{
                    transform:
                      userRole === 'user' ? 'translateX(0%)' : 'translateX(100%)',
                    willChange: 'transform',
                  }}
                ></div>

                <button
                  className={`px-7 py-1 w-6/12 capitalize ${userRole === 'user' ? 'text-white' : 'text-[#787878]'} relative z-10 bg-transparent transition-all duration-300 ease-in-out`}
                  onClick={() => setUserRole('user')}
                >
                  user
                </button>

                <button
                  className={`px-7 py-1 w-6/12 capitalize ${userRole === 'clinic' ? 'text-white' : 'text-[#787878]'} relative z-10 bg-transparent transition-all duration-300 ease-in-out`}
                  onClick={() => setUserRole('clinic')}
                >
                  clinic
                </button>
              </div>
            </div>


            {/* divider */}
            <div className="mt-4 text-black px-2 gap-x-3 mx-auto">
              <ul>
                <li className='py-1.5 pe-3 text-black hover:text-custom-red transition-all duration-300 cursor-pointer px-4 text-sm font-medium tracking-wide hover:bg-neutral-100 dark:hover:bg-neutral-800'>Sign Up</li>
                <li className='py-1.5 pe-3 text-black hover:text-custom-red mt-1 transition-all duration-300 cursor-pointer px-4 text-sm font-medium tracking-wide hover:bg-neutral-100 dark:hover:bg-neutral-800'>Log in</li>
                <li className='py-1.5 pe-3 text-black hover:text-custom-red mt-1 transition-all duration-300 cursor-pointer px-4 text-sm font-medium tracking-wide hover:bg-neutral-100 dark:hover:bg-neutral-800'>Download the app</li>
                <li className='py-1.5 pe-3 text-black hover:text-custom-red mt-1 transition-all duration-300 cursor-pointer px-4 text-sm font-medium tracking-wide hover:bg-neutral-100 dark:hover:bg-neutral-800'>Customer support</li>
              </ul>
            </div>
            {/* divider end */}
          </>
        )}
      </div>
		</div>
	)
}

export default NavMobile
