import ProfileHeading from "../ProfileHeading";
import UpcomingAppointment from "../UpcomingAppointment";
import Recommended from "./Recommended";
import TreatmentBio from "./TreatmentBio";
const ProfileSection = () => {
  return (
    <div>
    <div className="mt-[54px]">
      <ProfileHeading title="Welcome, jeff"/>
      <div className="text-[26.89px]">
        <p className="mb-5 mt-8">Congratulations on your 2nd visit for your PRP treatment at Dermamina</p>
        <div className="text-custom-red flex gap-x-10 font-semibold">
          <p>Leave a review</p>
          <p>Recommend to a friend</p>
        </div>
      </div>
      
      {/* upcoming appointment (section) */}
      <UpcomingAppointment/>

      {/* recommended for you (section) */}
      <Recommended/>

      {/* your treatment (section) */}
      <TreatmentBio/>
    </div>
  </div>
  );
}

export default ProfileSection;