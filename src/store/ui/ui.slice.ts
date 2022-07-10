import { createSlice } from '@reduxjs/toolkit'

import { IUiState } from './ui.interface'

const initialState: IUiState = {
	isMenuOpened: false,
	isUserMenuOpened: false,
	isPopupOpened: false,
}

export const uiSlice = createSlice({
	name: 'ui',
	initialState,
	reducers: {
		toggleMenu: (state) => {
			state.isMenuOpened = !state.isMenuOpened
		},
		toggleUSerMenu: (state) => {
			state.isUserMenuOpened = !state.isUserMenuOpened
		},
		togglePopup: (state) => {
			state.isPopupOpened = !state.isPopupOpened
		},
	},
})

export const { toggleMenu, toggleUSerMenu, togglePopup } = uiSlice.actions
export const uiReducer = uiSlice.reducer
