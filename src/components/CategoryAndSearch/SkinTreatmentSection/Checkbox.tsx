'use client'

import { FC } from 'react'

export interface CheckboxProps {
	label?: string
	subLabel?: string
	className?: string
	name: string
	defaultChecked?: boolean
	onChange?: (checked: boolean) => void
}

const Checkbox: FC<CheckboxProps> = ({
	subLabel = '',
	label = '',
	name,
	className = '',
	defaultChecked,
	onChange,
}) => {
	return (
		<div className={`flex text-sm font-body items-center ${className}`}>
			<input
				id={name}
				name={name}
				type="checkbox"
				className="focus:ring-action-primary h-4 w-4 rounded border-neutral-400 bg-white text-custom-red hover:border-neutral-900 focus:ring-custom-red dark:border-neutral-700 dark:bg-neutral-700 dark:checked:bg-custom-red dark:hover:border-neutral-400 sm:h-5 sm:w-5"
				defaultChecked={defaultChecked}
				onChange={(e) => onChange && onChange(e.target.checked)}
			/>
			{label && (
				<label
					htmlFor={name}
					className="ms-2 flex flex-1 flex-col justify-center text-start sm:ms-3.5"
				>
					<span className="text-neutral-900 dark:text-neutral-300">
						{label}
					</span>
					{subLabel && (
						<p className="mt-1 text-sm font-light text-neutral-500 dark:text-neutral-400">
							{subLabel}
						</p>
					)}
				</label>
			)}
		</div>
	)
}

export default Checkbox
