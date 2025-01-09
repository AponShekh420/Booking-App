import {
	StarIconFull,
	StarIconHalf,
	SuccessIcon,
} from '@/components/common/Icons'
import card_left from '@/images/home/card-left.png'
import card_profile from '@/images/home/card-profile.png'
import Image from 'next/image'

export default function ResultCard() {
	return (
		<div className="rounded-xl bg-[#F0F0F0] p-4">
			<div className="flex gap-x-4">
				<Image
					className="h-auto w-[7rem] rounded-xl object-cover"
					src={card_left}
					alt="card-image"
				/>
				<div>
					<div className="mt-4 flex items-center gap-x-6 font-bold">
						<Image
							className="h-9 w-9 rounded-full"
							src={card_profile}
							alt="card-profile"
						/>
						<span>Daniel L.</span>
					</div>
					<div className="mt-4">
						<p className="text-[1rem] font-bold">PRP Treatment</p>
						<small>Dermamina</small>
						<div className="flex gap-x-4">
							<div className="flex items-center">
								<StarIconFull />
								<StarIconFull />
								<StarIconFull />
								<StarIconFull />
								<StarIconHalf />
							</div>
							<p>4.9</p>
						</div>
					</div>
				</div>
			</div>
			<h3 className="mt-4 text-2xl font-bold text-custom-red sm:text-4xl">
				“I’m lost for words why didn’t know this existed!”
			</h3>
			<p className="py-4 text-sm sm:text-lg">
				&quot;The PRP hair treatment has been a game-changer. I didn’t think
				regrowth was possible, but the results speak for themselves. I only wish
				I’d started sooner!&quot;
			</p>
			<div className="flex items-center gap-x-2">
				<SuccessIcon />
				<p>2 weeks ago</p>
			</div>
		</div>
	)
}
