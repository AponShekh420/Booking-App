import { configureStore } from '@reduxjs/toolkit'
import authPopupReducer from './features/clinic/authPopupSlice'
import teamReducer from './features/team/teamSlice'
import headerReducer from './common/headerSlice'
// ...

export const store = configureStore({
	reducer: {
		team: teamReducer,
		authPopup: authPopupReducer,
		headerReducer: headerReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
