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
				className={`h-[47px] text-nowrap rounded-3xl bg-custom-red px-24 text-[23px] capitalize text-white transition-colors duration-300 hover:bg-black ${className}`}
				ref={ref}
				{...props}
			>
				{title}
			</button>
		)
	},
)

export default RedButton
