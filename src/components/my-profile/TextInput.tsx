import React, { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	label?: string
	type?: string
}
// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className = '', label, type = 'text', ...args }, ref) => {
		return (
			<div className="relative h-fit">
				<input
					type={type}
					id="floating_outlined"
					className={`peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-[16px] text-gray-900 focus:border-[#004AD7] focus:outline-none focus:ring-0 ${className}`}
					placeholder=""
					ref={ref}
					{...args}
				/>
				<label
					htmlFor="floating_outlined"
					className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-[#09101D] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:px-2 peer-focus:text-[#004AD7] dark:bg-gray-900 dark:text-gray-400 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
				>
					{label}
				</label>
			</div>
		)
	},
)
export default TextInput
