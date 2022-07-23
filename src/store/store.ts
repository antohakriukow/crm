import { configureStore } from '@reduxjs/toolkit'
import { reducer as toastrReducer } from 'react-redux-toastr'

import { uiReducer } from './ui/ui.slice'

import { canbanReducer } from './canban/canban.slice'
import { userReducer } from './user/user.slice'

export const store = configureStore({
	reducer: {
		ui: uiReducer,
		user: userReducer,
		canban: canbanReducer,
		toastr: toastrReducer,
	},
	devTools: true,
})

export type TypeRootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
