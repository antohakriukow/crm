import { createSlice } from '@reduxjs/toolkit'

import { IUserState } from './user.interface'

const initialState: IUserState = {
	isUser: true,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		fakeReducer: (state) => {
			state.isUser = !state.isUser
		},
	},
})

export const { fakeReducer } = userSlice.actions
export const userReducer = userSlice.reducer
