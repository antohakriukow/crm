import { configureStore } from '@reduxjs/toolkit'

import { uiReducer } from './ui/ui.slice'

import { userReducer } from './user/user.slice'

export const store = configureStore({
	reducer: {
		ui: uiReducer,
		user: userReducer,
	},
	devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
