import { ITask } from './task.types'

export interface ICard {
	_id: string
	title: string
	columnId: string
	tasks: ITask[]
	ownerId: string
	createdAt: string
}
