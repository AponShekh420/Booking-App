import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
type SearchQueryT = {
	searchValue: string
}
// Define the initial state using that type
const initialState: SearchQueryT = {
	searchValue: "",
}

export const headerSlice = createSlice({
	name: 'auth-popup',
	initialState,
	reducers: {
		addSearchValue: (state, action: PayloadAction<string>) => {
			state.searchValue = `${state.searchValue, action.payload}`
		},
	}
})

export const {
	addSearchValue,
} = headerSlice.actions
export default headerSlice.reducer
