import Header from '@/components/common/header/Header'
import Wrapper from '@/components/common/Wrapper'
import ProfileSidebar from '@/components/my-profile/ProfileSidebar'
import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<Header />
			<Wrapper className="sm:w-full">
				<ProfileSidebar>{children}</ProfileSidebar>
			</Wrapper>
		</div>
	)
}

export default layout
