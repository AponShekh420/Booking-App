import { StarIconFull } from '@/components/common/Icons'
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
	return (
		<div className="text-[17.89px] lg:text-[24px]">
			<Image
				className="w-full rounded-lg"
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
