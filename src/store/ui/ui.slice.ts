import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IUiState } from './ui.interface'

const initialState: IUiState = {
	isMenuOpened: false,
	isUserMenuOpened: false,
	isPopupOpened: false,
	isColumnRedactorOpened: false,
	isPaletteOpened: false,
	editColumnId: '',
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
		toggleColumnRedactorOpened: (state) => {
			state.isColumnRedactorOpened = !state.isColumnRedactorOpened
		},
		togglePaletteOpened: (state) => {
			state.isPaletteOpened = !state.isPaletteOpened
		},
		setEditColumnId: (state, action: PayloadAction<string>) => {
			state.editColumnId = action.payload
		},
	},
})

export const {
	toggleMenu,
	toggleUSerMenu,
	togglePopup,
	toggleColumnRedactorOpened,
	togglePaletteOpened,
	setEditColumnId,
} = uiSlice.actions
export const uiReducer = uiSlice.reducer
