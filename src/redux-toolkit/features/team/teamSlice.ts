import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
type TeamT = {
	activeTeam: {
		id: number | null
		image: string
		name: string
		rating: number | null
	}
}
// Define the initial state using that type
const initialState: TeamT = {
	activeTeam: {
		id: null,
		image: '',
		name: '',
		rating: null,
	},
}

export const teamSlice = createSlice({
	name: 'team',
	initialState,
	reducers: {
		addTeam: (state, action: PayloadAction<TeamT['activeTeam']>) => {
			state.activeTeam = action.payload
		},
	},
})

export const { addTeam } = teamSlice.actions
export default teamSlice.reducer
