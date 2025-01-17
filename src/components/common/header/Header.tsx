'use client'
import logo from '@/images/logo/black-logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Wrapper from '../Wrapper'
import AvatarDropdown from './AvatarDropdown'
import CategorySlide from './CategorySlide'
import SearchBar from './Searchbar/SearchBar'

const Header = () => {
	const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false)

	return (
		<div className="w-full bg-white">
			<Wrapper>
				<div className="flex w-full items-center justify-between py-[24px] sm:gap-x-5 md:gap-x-7 lg:gap-x-10 xl:gap-x-12">
					<Link
						href={'/'}
						className="hidden h-[27px] w-[236px] items-center sm:flex md:h-[37px] md:w-[246px] lg:h-[47px] lg:w-[256px] xl:h-[57px] xl:w-[266px]"
					>
						<Image
							src={logo}
							alt="Logo"
							width={100}
							height={100}
							className="h-full w-full"
						/>
					</Link>
					<div className="flex w-full items-center sm:w-8/12 lg:pr-16 xl:pr-28 2xl:pr-52">
						<SearchBar />
					</div>
					<div className="hidden sm:block">
						<AvatarDropdown className="hidden sm:block" />

						{/* mobile menu */}

						{/* <div className="cursor-pointer sm:hidden block">
              <Image 
                src={"/assets/icons/mobile-menu.svg"} 
                alt="menu" 
                className="w-[32px] h-[18.7px]" 
                width={100} 
                height={100}
                onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              />
            </div> */}

						<aside
							className={` ${mobileSidebarOpen ? 'z-50 translate-x-0 opacity-100' : 'z-[-1] translate-x-[200px] opacity-0'} boxShadow absolute right-0 top-[65px] w-full rounded-md bg-white p-4 text-center transition-all duration-300 sm:hidden`}
						>
							<ul className="flex flex-col items-center gap-[20px] text-[1rem] text-gray-600">
								<li className="cursor-pointer border-b-[2px] border-transparent capitalize transition-all duration-500 hover:border-b-[#3B9DF8]">
									home
								</li>
								<li className="cursor-poin ter border-b-[2px] border-transparent capitalize transition-all duration-500 hover:border-b-[#3B9DF8]">
									Features
								</li>
								<li className="cursor-pointer border-b-[2px] border-transparent capitalize transition-all duration-500 hover:border-b-[#3B9DF8]">
									Blogs
								</li>
								<li className="cursor-pointer border-b-[2px] border-transparent capitalize transition-all duration-500 hover:border-b-[#3B9DF8]">
									Shop
								</li>
							</ul>
						</aside>
					</div>
				</div>
			</Wrapper>

			<Wrapper>
				<div className="w-full">
					<CategorySlide />
				</div>
			</Wrapper>
		</div>
	)
}

export default Header
