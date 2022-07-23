import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IDrag } from './canban.interface'
import { ICanbanState } from './canban.interface'

const empty = { id: '', position: '', column: '' }

const initialState: ICanbanState = {
	draggingItems: [],
	targetColumn: '',
	targetItem: 0,
}

export const canbanSlice = createSlice({
	name: 'canban',
	initialState,
	reducers: {
		addToDragItems: (state, action: PayloadAction<string>) => {
			state.draggingItems.push(action.payload)
		},
		removeFromDragItems: (state, action: PayloadAction<string>) => {
			state.draggingItems.filter((id) => id !== action.payload)
		},
		clearDragItems: (state) => {
			state.draggingItems.splice(0)
		},
		setTargetColumn: (state, action: PayloadAction<string>) => {
			state.targetColumn = action.payload
		},
		clearTargetColumn: (state) => {
			state.targetColumn = ''
		},
		setTargetItem: (state, action: PayloadAction<number>) => {
			state.targetItem = action.payload
		},
		clearTargetItem: (state) => {
			state.targetItem = 0
		},
		clearCanbanState: (state) => {
			state.draggingItems.splice(0)
			state.targetColumn = ''
			state.targetItem = 0
			// console.log('Cleared state: ', {
			// 	draggingItems: state.draggingItems,
			// 	targetColumn: state.targetColumn,
			// 	targetItem: state.targetItem,
			// })
		},
	},
})

export const {
	addToDragItems,
	removeFromDragItems,
	clearDragItems,
	setTargetColumn,
	clearTargetColumn,
	setTargetItem,
	clearTargetItem,
	clearCanbanState,
} = canbanSlice.actions
export const canbanReducer = canbanSlice.reducer
