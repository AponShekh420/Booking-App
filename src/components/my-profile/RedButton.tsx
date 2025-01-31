import React, { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	title?: string
}

// eslint-disable-next-line react/display-name
const RedButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className = '', title, ...props }, ref) => {
		return (
			<button
				className={`rounded-[80.12px] hover:bg-black px-4 py-1 text-[13.07px] capitalize text-white transition-all duration-300 bg-custom-red md:px-5 md:py-1 md:text-[14px] lg:px-7 lg:py-2 lg:text-[18.03px] ${className}`}
				ref={ref}
				{...props}
			>
				{title}
			</button>
		)
	},
)

export default RedButton
