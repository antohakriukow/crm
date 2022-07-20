export interface IStage {
	_id: string
	name: string
	color: string
	owner: string
}

export interface IStageDTO {
	_id: string
	name?: string
	color?: string
}

// export interface IStageDTO extends Omit<IStage, '_id' | 'owner'> {}

export interface IDeal {
	_id: string
	title: string
	description: string
	stage: string
	position: number
	owner: string
	createdAt: string
}

export interface IUpdateDealsStageDTO {
	deals: string[]
	stage: string
}

export interface IDeleteDealsStageDTO {
	deals: string[]
}

export interface IDealDTO {
	title: string
	description: string
	stage: string
	position: number
}
