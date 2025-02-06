'use client'

import React, { FC, useState } from 'react'

export interface BtnLikeIconProps {
	className?: string
	colorClass?: string
	sizeClass?: string
	isLiked?: boolean
	svgProps?: React.SVGProps<SVGSVGElement>
}

const DownloadBtn: FC<BtnLikeIconProps> = ({
	className = '',
	colorClass = 'text-white bg-black bg-opacity-30 hover:bg-opacity-50',
	sizeClass = 'w-8 h-8',
	isLiked = false,
	svgProps,
}) => {
	const [likedState, setLikedState] = useState(isLiked)

	return (
		<div
			className={`flex cursor-pointer items-center justify-center rounded-full transition-colors ${sizeClass} ${colorClass} ${className} ${
				likedState ? 'bg-white bg-opacity-100 !text-black' : ''
			} `}
			title="Save"
			onClick={() => setLikedState(!likedState)}
		>
			<svg
				width="17"
				height="17"
				viewBox="0 0 17 17"
				{...svgProps}
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M6.00161 5.76599L7.57951 4.1812V10.7891C7.57951 10.9718 7.6521 11.1471 7.78132 11.2763C7.91054 11.4055 8.0858 11.4781 8.26854 11.4781C8.45129 11.4781 8.62655 11.4055 8.75577 11.2763C8.88498 11.1471 8.95758 10.9718 8.95758 10.7891V4.1812L10.5355 5.76599C10.5995 5.83057 10.6757 5.88183 10.7597 5.91681C10.8437 5.95179 10.9337 5.9698 11.0247 5.9698C11.1157 5.9698 11.2057 5.95179 11.2897 5.91681C11.3736 5.88183 11.4499 5.83057 11.5139 5.76599C11.5785 5.70193 11.6297 5.62572 11.6647 5.54176C11.6997 5.45779 11.7177 5.36773 11.7177 5.27677C11.7177 5.18581 11.6997 5.09575 11.6647 5.01178C11.6297 4.92782 11.5785 4.85161 11.5139 4.78755L8.75776 2.03141C8.69223 1.96868 8.61496 1.9195 8.53038 1.88671C8.36262 1.81779 8.17446 1.81779 8.00671 1.88671C7.92213 1.9195 7.84486 1.96868 7.77933 2.03141L5.02318 4.78755C4.95893 4.8518 4.90797 4.92807 4.8732 5.01201C4.83843 5.09595 4.82054 5.18591 4.82054 5.27677C4.82054 5.36763 4.83843 5.45759 4.8732 5.54153C4.90797 5.62547 4.95893 5.70174 5.02318 5.76599C5.08742 5.83023 5.16369 5.88119 5.24763 5.91596C5.33157 5.95073 5.42154 5.96863 5.5124 5.96863C5.60325 5.96863 5.69322 5.95073 5.77716 5.91596C5.8611 5.88119 5.93737 5.83023 6.00161 5.76599ZM14.4699 10.1C14.2871 10.1 14.1119 10.1726 13.9827 10.3018C13.8534 10.4311 13.7808 10.6063 13.7808 10.7891V13.5452C13.7808 13.728 13.7082 13.9032 13.579 14.0324C13.4498 14.1617 13.2745 14.2342 13.0918 14.2342H3.44528C3.26254 14.2342 3.08728 14.1617 2.95806 14.0324C2.82884 13.9032 2.75625 13.728 2.75625 13.5452V10.7891C2.75625 10.6063 2.68365 10.4311 2.55443 10.3018C2.42521 10.1726 2.24995 10.1 2.06721 10.1C1.88447 10.1 1.70921 10.1726 1.57999 10.3018C1.45077 10.4311 1.37817 10.6063 1.37817 10.7891V13.5452C1.37817 14.0934 1.59596 14.6192 1.98362 15.0069C2.37128 15.3945 2.89705 15.6123 3.44528 15.6123H13.0918C13.64 15.6123 14.1658 15.3945 14.5535 15.0069C14.9411 14.6192 15.1589 14.0934 15.1589 13.5452V10.7891C15.1589 10.6063 15.0863 10.4311 14.9571 10.3018C14.8279 10.1726 14.6526 10.1 14.4699 10.1Z"
					fill="currentColor"
				/>
			</svg>
		</div>
	)
}

export default DownloadBtn
