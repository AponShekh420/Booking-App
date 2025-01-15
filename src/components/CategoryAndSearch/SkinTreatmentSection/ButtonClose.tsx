import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'
import twFocusClass from '@/utils/twFocusClass'
import { FilterIconNav } from '@/components/common/Icons'

export interface ButtonCloseProps {
	className?: string
	onClick?: () => void
}

const ButtonClose: React.FC<ButtonCloseProps> = ({
	className = '',
	onClick = () => {},
}) => {
	return (
		<button
			className={
				`flex h-10 w-10 items-center justify-center rounded-full text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-700 ${className} ` +
				twFocusClass()
			}
			onClick={onClick}
		>
			<span className="sr-only">Close</span>
			<FilterIconNav className='hover:text-custom-red text-black h-8 w-8'/>
		</button>
	)
}

export default ButtonClose
