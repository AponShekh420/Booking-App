import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	title?: string
	Icon?: any
}

// eslint-disable-next-line react/display-name
const IconButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className = '', title, Icon, ...props }, ref) => {
		return (
			<button
				ref={ref}
				type="button"
				className={`inline-flex items-center gap-x-2 rounded-lg border border-[#858C94] bg-white px-5 py-2.5 text-center text-[14.3px] font-semibold text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-100 lg:text-[16px] ${className}`}
				{...props}
			>
				<Icon />
				<span>{title}</span>
			</button>
		)
	},
)

export default IconButton
