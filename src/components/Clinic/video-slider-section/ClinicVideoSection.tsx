import Wrapper from '../../common/Wrapper'
import ClinicHeadingText from '../ClinicHeadingText'

import ClinicRating from './ClinicRating'
import ClinicVideoSlider from './ClinicVideoSlider'

export default function ClinicVideoSection() {
	return (
		<Wrapper>
			<ClinicHeadingText title="Dermamina" />
			<ClinicRating />
			<ClinicVideoSlider />
		</Wrapper>
	)
}
