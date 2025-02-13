'use client'

import { DownArrowIcon } from '@/components/common/Icons'
import { useState } from 'react'

const Faq = ({ title, desc }: { title: string; desc: string }) => {
	const [toggle, setToggle] = useState<boolean>(false)

	return (
		<div className="text-md mb-2 lg:mb-3">
			<p
				className="cursor-pointer font-bold duration-300 hover:text-custom-red"
				onClick={() => setToggle((pre) => !pre)}
			>
				{title}
			</p>
			<div
				className={`mt-2 flex items-center gap-x-4 overflow-hidden transition-[max-height] delay-0 duration-300 ease-in-out sm:mt-3 lg:mt-2 ${toggle ? 'max-h-[9999px]' : 'max-h-[0px]'}`}
			>
				<p className="text-custom-red">{desc}</p>
				<DownArrowIcon />
			</div>
		</div>
	)
}

export default Faq
