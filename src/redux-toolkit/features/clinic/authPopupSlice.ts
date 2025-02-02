import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
type authT = {
	signin: {
		active: boolean
		email: string
	}
	signup: {
		active: boolean
		email: string
		fullname: string
		phone: string
		password: string
	}
	contsents: {
		active: boolean
	}
	otp: {
		active: boolean
		code: string | number
	}
}
// Define the initial state using that type
const initialState: authT = {
	signin: {
		active: false,
		email: '',
	},
	signup: {
		active: false,
		email: '',
		fullname: '',
		phone: '',
		password: '',
	},
	contsents: {
		active: false,
	},
	otp: {
		active: false,
		code: '',
	},
}

export const authPopupSlice = createSlice({
	name: 'auth-popup',
	initialState,
	reducers: {
		signinActive: (state) => {
			state.signin.active = true
			state.signup.active = false
			state.contsents.active = false
			state.otp.active = false
		},
		signupActive: (state) => {
			state.signin.active = false
			state.signup.active = true
			state.contsents.active = false
			state.otp.active = false
		},
		contsentsActive: (state) => {
			state.signin.active = false
			state.signup.active = false
			state.contsents.active = true
			state.otp.active = false
		},
		otpActive: (state) => {
			state.signin.active = false
			state.signup.active = false
			state.contsents.active = false
			state.otp.active = true
		},
		closeAuthPopup: (state) => {
			state.signin.active = false
			state.signup.active = false
			state.contsents.active = false
			state.otp.active = false
		},
	},
})

export const {
	signinActive,
	signupActive,
	contsentsActive,
	otpActive,
	closeAuthPopup,
} = authPopupSlice.actions
export default authPopupSlice.reducer
