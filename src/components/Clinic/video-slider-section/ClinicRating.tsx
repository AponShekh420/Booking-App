import Link from 'next/link'
import {
	LocationIcon,
	StarIconFull,
	StarIconHalf,
	WatchIcon,
} from '../../common/Icons'

export default function ClinicRating() {
	return (
		<div className="flex gap-4">
			<div className="flex items-center gap-2">
				<span className="flex">
					<StarIconFull />
					<StarIconFull />
					<StarIconFull />
					<StarIconFull />
					<StarIconHalf />
				</span>
				<span>4.9 (292)</span>
			</div>
			<div className="flex items-center">
				<LocationIcon />
				<p>114 New Cavendish St, London W1W 6XT</p>
			</div>
			<div className="flex items-center gap-2">
				<WatchIcon />
				<Link className="text-custom-red" href={'/'}>
					Open Today
				</Link>
				<span>9:30 am–8:30 pm</span>
			</div>
		</div>
	)
}
