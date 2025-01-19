import React, { TextareaHTMLAttributes } from 'react'

export interface TextareaProps
	extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	className?: string
	label?: string
	name: string
}

// eslint-disable-next-line react/display-name
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
	({ className = '', label, name, children, ...args }, ref) => {
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

				<textarea
					ref={ref}
					name={name}
					className={`block h-[115px] w-full rounded-[10px] border-[#9B9B9B] bg-white text-[18px] focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 ${className}`}
					{...args}
				/>
			</div>
		)
	},
)

export default Textarea
