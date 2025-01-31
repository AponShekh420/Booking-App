import Consents from "./consents/Consents";
import OtpPopup from "./OTP/OtpPopup";
import SigninPopup from "./signin/SigninPopup";
import SingupPopup from "./signup/SingupPopup";

const AuthContainer = () => {
  return (
    <div className="fixed w-screen min-h-screen bg-black bg-opacity-35 flex items-center justify-center z-50 authPopup">
      {/* <SigninPopup/> */}
      {/* <SingupPopup/> */}
      {/* <Consents/> */}
      {/* <OtpPopup/> */}
    </div>
  );
}

export default AuthContainer;