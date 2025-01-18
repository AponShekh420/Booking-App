'use client'

import { StayDataType } from '@/data/types'
import { FC, useState } from 'react'

export interface AnyReactComponentProps {
	className?: string
	reviewStart?: number
	isSelected?: boolean
	lat: number
	lng: number
}

const AnyReactComponent: FC<AnyReactComponentProps> = ({
	className = '',
	reviewStart,
}) => {
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div
			className={`nc-AnyReactComponent relative ${className}`}
			onMouseEnter={() => setIsOpen(true)}
			onMouseLeave={() => setIsOpen(false)}
		>
			<div
				className={`relative z-[99] font-semibold text-sm shadow-lg transition-colors`}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 384 512"
					className="h-10 w-10 hover:opacity-50"
				>
					<path
						fill="currentColor"
						d="M384 192c0 87.4-117 243-168.3 307.2c-12.3 15.3-35.1 15.3-47.4 0C117 435 0 279.4 0 192C0 86 86 0 192 0S384 86 384 192z"
					/>
				</svg>

				<span className="absolute left-1/2 top-1 -translate-x-1/2 text-sm text-white">
					{reviewStart}
				</span>
			</div>
		</div>
	)
}

export default AnyReactComponent
