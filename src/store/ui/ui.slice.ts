import { createSlice } from '@reduxjs/toolkit'
import { IUiState } from './ui.interface'

const initialState: IUiState = {
	isMenuOpened: false,
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleMenu: state => {
			state.isMenuOpened = !state.isMenuOpened
		},
	},
})

export const { toggleMenu } = uiSlice.actions
export const uiReducer = uiSlice.reducer
