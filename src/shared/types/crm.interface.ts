export interface IStage {
	_id: string
	name: string
	color: string
	owner: string
}

export interface IStageDTO extends Omit<IStage, '_id' | 'owner'> {}

export interface IDeal {
	_id: string
	title: string
	description: string
	stage: string
	owner: string
	createdAt: string
}
