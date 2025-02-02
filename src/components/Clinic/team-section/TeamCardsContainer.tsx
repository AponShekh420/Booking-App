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
	{
		id: 6,
		image: '/assets/clinic/team/teamusericon.png',
		name: 'any member',
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
			</div>
		</div>
	)
}
