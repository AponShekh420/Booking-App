import React from 'react'

interface WrapperProps {
	children: React.ReactNode
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
	return (
		<div className="m-auto w-11/12 max-w-[1512px] sm:w-10/12">{children}</div>
	)
}

export default Wrapper
