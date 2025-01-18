import ClinicHeadingText from '../ClinicHeadingText'
import TeamCard from './TeamCard'
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
export default function TeamSection() {
	return (
		<div className="mt-[79px]">
			<ClinicHeadingText title="Team" />
			<div className="mt-6 grid grid-cols-3 gap-[37px] sm:grid-cols-4 md:grid-cols-5">
				{teamApi.map((item) => (
					<TeamCard key={item.id} team={item} />
				))}
			</div>
		</div>
	)
}
