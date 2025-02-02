import { configureStore } from '@reduxjs/toolkit'
import authPopupReducer from './features/clinic/authPopupSlice'
import teamReducer from './features/team/teamSlice'
// ...

export const store = configureStore({
	reducer: {
		team: teamReducer,
		authPopup: authPopupReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
