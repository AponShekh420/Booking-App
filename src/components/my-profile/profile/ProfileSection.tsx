import ProfileHeading from '../ProfileHeading'
import UpcomingAppointment from '../UpcomingAppointment'
import Recommended from './Recommended'
import TreatmentBio from './TreatmentBio'
const ProfileSection = () => {
	return (
		<div>
			<div className="mt-[54px]">
				<ProfileHeading tag="h1" title="Welcome, jeff" />
				<div>
					<p className="mb-3 mt-4 md:mb-3 md:mt-7 lg:mb-5 lg:mt-8">
						Congratulations on your 2nd visit for your PRP treatment at
						Hanley Laser Clinic
					</p>
					<div className="flex gap-x-10 font-semibold text-custom-red">
						<p>Leave a review</p>
						<p>Recommend to a friend</p>
					</div>
				</div>

				{/* upcoming appointment (section) */}
				<UpcomingAppointment />

				{/* recommended for you (section) */}
				<Recommended />

				{/* your treatment (section) */}
				<TreatmentBio />
			</div>
		</div>
	)
}

export default ProfileSection
