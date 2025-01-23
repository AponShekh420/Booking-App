import { configureStore } from '@reduxjs/toolkit'
import teamReducer from './features/team/teamSlice'
// ...

export const store = configureStore({
	reducer: {
		team: teamReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
