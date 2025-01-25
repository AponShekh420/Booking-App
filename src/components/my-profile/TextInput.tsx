import React, { InputHTMLAttributes } from 'react'
import { ErrorFieldIcon } from '../common/Icons'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	className?: string
	label?: string
	type?: string
	error?: any
}
// eslint-disable-next-line react/display-name
const TextInput = React.forwardRef<HTMLInputElement, InputProps>(
	({ className = '', label, error, type = 'text', ...args }, ref) => {
		return (
			<div>
				<div className="relative h-fit">
					<input
						type={type}
						id="floating_outlined"
						className={`peer block w-full appearance-none rounded-lg border-2 border-gray-300 bg-transparent px-2.5 pb-2.5 pt-4 text-[16px] text-gray-900 focus:border-[#004AD7] focus:outline-none focus:ring-0 ${className} ${error && '!border-custom-red focus:border-custom-red'}`}
						placeholder=""
						ref={ref}
						{...args}
					/>
					<label
						htmlFor="floating_outlined"
						className={`absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-2 text-[16px] text-[#09101D] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-90 peer-focus:px-2 peer-focus:text-[#004AD7] rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 ${error && 'peer-focus:text-custom-red'}`}
					>
						{label}
					</label>
				</div>
				{error && (
					<p className="flex items-center gap-x-1 rounded-lg bg-[#FEEFEF] px-1 py-1 text-[13px] text-custom-red">
						<ErrorFieldIcon className="h-5 w-4" />
						<span>{error.message}</span>
					</p>
				)}
			</div>
		)
	},
)
export default TextInput
