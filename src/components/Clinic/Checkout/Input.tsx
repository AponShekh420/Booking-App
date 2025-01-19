import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	label?: string
	name: string
}

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>(
	({ className = '', label, name, children, type = 'text', ...args }, ref) => {
		return (
			<div>
				{label && (
					<label
						className="text-[24px] font-semibold leading-[49.8px]"
						htmlFor={name}
					>
						{label}
					</label>
				)}

				<input
					ref={ref}
					type={type}
					name={name}
					className={`block h-[62px] w-full rounded-[10px] border-[#9B9B9B] bg-white text-[18px] focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${className}`}
					{...args}
				/>
			</div>
		)
	},
)

export default Input
