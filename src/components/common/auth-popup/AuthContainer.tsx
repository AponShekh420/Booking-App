'use client'
import { useAppSelector } from '@/redux-toolkit/hooks'
import Consents from './consents/Consents'
import OtpPopup from './OTP/OtpPopup'
import SigninPopup from './signin/SigninPopup'
import SingupPopup from './signup/SingupPopup'

const AuthContainer = () => {
	const { signin, signup, contsents, otp } = useAppSelector(
		(state: { authPopup: Record<string, { active: boolean }> }) =>
			state.authPopup,
	)

	if (signin.active) {
		return (
			<div className="authPopup fixed z-50 flex min-h-screen w-screen items-center justify-center bg-black bg-opacity-35">
				<SigninPopup />
			</div>
		)
	} else if (signup.active) {
		return (
			<div className="authPopup fixed z-50 flex min-h-screen w-screen items-center justify-center bg-black bg-opacity-35">
				<SingupPopup />
			</div>
		)
	} else if (contsents.active) {
		return (
			<div className="authPopup fixed z-50 flex min-h-screen w-screen items-center justify-center bg-black bg-opacity-35">
				<Consents />
			</div>
		)
	} else if (otp.active) {
		return (
			<div className="authPopup fixed z-50 flex min-h-screen w-screen items-center justify-center bg-black bg-opacity-35">
				<OtpPopup />
			</div>
		)
	} else {
		return null
	}
}

export default AuthContainer
