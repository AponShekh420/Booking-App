import React from 'react'

interface WrapperProps {
	children: React.ReactNode
	className?: string
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
	return (
		<div className={`m-auto w-11/12 max-w-[1512px] sm:w-11/12 ${className}`}>
			{children}
		</div>
	)
}

export default Wrapper
