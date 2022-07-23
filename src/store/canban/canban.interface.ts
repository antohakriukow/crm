export interface IDrag {
	id?: string
	position?: string
	column?: string
}

// export interface ICanbanState {
// 	draggingItems: IDrag[]
// 	targetColumn: IDrag
// 	targetItem: IDrag
// }

export interface ICanbanState {
	draggingItems: string[]
	targetColumn: string
	targetItem: number
}
