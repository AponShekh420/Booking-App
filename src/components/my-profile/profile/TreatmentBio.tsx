import ProfileHeading from '../ProfileHeading'
import RedButton from '../RedButton'
import Faq from './Faq'

const TreatmentBio = () => {
	return (
		<div className="mt-10 w-full">
			<ProfileHeading
				className="mb-5 !capitalize text-custom-red"
				title="Your Treatment Bio"
			/>

			<div className="m-auto w-11/12">
				{/* question */}
				<Faq
					title="1. What is your level of experience with aesthetic or wellness treatments?"
					desc="I’m completely new"
				/>
				<Faq
					title="2. What are you currently looking for?"
					desc="General advice or recommendations"
				/>
				<Faq
					title="3. What type of treatments are you most interested in?"
					desc="Facial rejuvenation (e.g., Botox, fillers, facials)."
				/>
				<Faq
					title="4. What benefits are you seeking from these treatments?"
					desc="Addressing a specific concern (e.g., wrinkles, hair loss)."
				/>
				<Faq
					title="5. What’s the most important factor when choosing a clinic?"
					desc="Affordable pricing."
				/>

				<RedButton title="Save" />
			</div>
		</div>
	)
}

export default TreatmentBio
