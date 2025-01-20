import { StarIconFull } from '@/components/common/Icons';
import Image from 'next/image';

type TeamT = {
	team: {
		id: number;
		image: string;
		name: string;
		rating: number;
	};
};

export default function TeamCard({ team }: TeamT) {
	return (
		<div className="text-[17.89px] lg:text-[24px] flex flex-col items-center">
			{/* Fix the blurry image */}
			<Image
				className="rounded-lg object-cover" // Ensures proper scaling
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
	);
}
