import { StarIconFull, TeamUserIcon } from '@/components/common/Icons'
import ClinicHeadingText from '../ClinicHeadingText'
import TeamCard from './TeamCard'
import Image from 'next/image'
const teamApi = [
	{
		id: 1,
		image: '/assets/clinic/team/team.png',
		name: 'patrick',
		rating: 5.0,
	},
	{
		id: 2,
		image: '/assets/clinic/team/team-2.png',
		name: 'Rosa',
		rating: 5.0,
	},

	{
		id: 3,
		image: '/assets/clinic/team/team-1.png',
		name: 'Pawel',
		rating: 5.0,
	},
	{
		id: 4,
		image: '/assets/clinic/team/team-5.png',
		name: 'Bridgette',
		rating: 5.0,
	},
	{
		id: 5,
		image: '/assets/clinic/team/team-3.png',
		name: 'Olga',
		rating: 5.0,
	},
]
export default function TeamCardsContainer() {
	return (
		<div className="mt-[20px]">
			<div className="mt-6 grid grid-cols-3 gap-[37px]">
				{teamApi.map((item) => (
					<TeamCard key={item.id} team={item} />
				))}
				{/* new number add fun */}
				<div className="text-[11.89px] xs:text-[17.89px] lg:text-[24px] flex flex-col items-center justify-center">
					<div>
						<Image
							className="rounded-lg object-cover" // Ensures proper scaling
							src={"/assets/clinic/team/teamusericon.png"}
							alt="team"
							width={70} // Larger width
							height={70} // Larger height
							sizes="(max-width: 768px) 50px, (max-width: 1200px) 100px, 400px" // Responsive sizes
							quality={100} // Maximum image quality
						/>
					</div>
					<div className="mx-auto mt-2 w-fit">
						<h5 className="text-center font-semibold">Any member</h5>
						<div className="flex items-center gap-x-1.5 invisible">
							<StarIconFull /> <span className="font-bold">{5}.0</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
