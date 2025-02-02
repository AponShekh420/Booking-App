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
	if (team.name === 'any member') {
		return (
			<div
				onClick={() => dispatch(addTeam(team))}
				className={`flex flex-col items-center justify-center rounded-3xl text-[11.89px] xs:text-[17.89px] lg:text-[24px] ${activeTeam.id === team.id ? 'border-2 border-custom-red p-1' : ''}`}
			>
				<div>
					<Image
						className="rounded-lg object-cover" // Ensures proper scaling
						src={team?.image}
						alt="team"
						width={70} // Larger width
						height={70} // Larger height
						sizes="(max-width: 768px) 50px, (max-width: 1200px) 100px, 400px" // Responsive sizes
						quality={100} // Maximum image quality
					/>
				</div>
				<div className="mx-auto mt-2 w-fit">
					<h5 className="text-center font-semibold">{team.name}</h5>
					<div className="invisible flex items-center gap-x-1.5">
						<StarIconFull /> <span className="font-bold">{team.rating}</span>
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div
				onClick={() => dispatch(addTeam(team))}
				className="flex cursor-pointer flex-col items-center text-[17.89px] lg:text-[24px]"
			>
				{/* Fix the blurry image */}
				<Image
					className={`rounded-3xl object-cover ${activeTeam.id === team.id ? 'border-2 border-custom-red p-1' : ''}`}
					src={team?.image}
					alt="team"
					width={1000} // Larger width
					height={1000} // Larger height
					sizes="(max-width: 768px) 100px, (max-width: 1200px) 200px, 400px" // Responsive sizes
					quality={100} // Maximum image quality
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
}
