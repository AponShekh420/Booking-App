'use client'
import { StarIconFull } from '@/components/common/Icons'
import { addTeam } from '@/redux-toolkit/features/team/teamSlice'
import { useAppDispatch, useAppSelector } from '@/redux-toolkit/hooks'
import Image from 'next/image'

type TeamT = {
	team: {
		id: number
		image: string
		name: string
		rating: number
	}
}

export default function TeamCard({ team }: TeamT) {
	const activeTeam = useAppSelector((state) => state.team.activeTeam)
	const dispatch = useAppDispatch()

	return (
		<div
			className="cursor-pointer text-[17.89px] lg:text-[24px]"
			onClick={() => dispatch(addTeam(team))}
		>
			<Image
				className={`w-full rounded-xl ${activeTeam.id === team.id ? 'border-2 border-custom-red p-1' : ''}`}
				src={team?.image}
				alt="team"
				width={124}
				height={124}
			/>
			<div className="mx-auto mt-2 w-fit">
				<h5 className="text-center font-semibold">{team?.name}</h5>
				<div className="flex items-center gap-x-1.5">
					<StarIconFull /> <span className="font-bold">{team.rating}.0</span>
				</div>
			</div>
		</div>
	)
}
