import { HeartIcon } from '@heroicons/react/24/outline'
import Wrapper from '../../common/Wrapper'
import ClinicHeadingText from '../ClinicHeadingText'

import { DownloadArrowIcon } from '@/components/common/Icons'
import ClinicRating from './ClinicRating'
import ClinicVideoSlider from './ClinicVideoSlider'

export default function ClinicVideoSection() {
	return (
		<Wrapper className="mt-[27px]">
			<div className="flex justify-between">
				<ClinicHeadingText tag="h1" title="Dermamina" />
				<div className="flex items-center gap-x-4 sm:hidden">
					<button>
						<HeartIcon className="h-auto w-[22.45px] text-xl text-black" />
					</button>
					<button>
						<DownloadArrowIcon className="h-auto w-[20.45px] text-xl text-black" />
					</button>
				</div>
			</div>

			<ClinicRating />
			<ClinicVideoSlider />
		</Wrapper>
	)
}
