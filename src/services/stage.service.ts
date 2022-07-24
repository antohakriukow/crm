import {
	ICreateStageDTO,
	IStage,
	IStageDTO,
} from '../shared/types/crm.interface'

import { getStageUrl } from '../config/api.config'

import axios from '../api/interceptors'

export const StageService = {
	async getAll() {
		return axios.get<IStage[]>(getStageUrl(''))
	},

	async getById(_id: string) {
		return axios.get<IStage>(getStageUrl(`/${_id}`))
	},

	async create(data: ICreateStageDTO) {
		return axios.post<string>(getStageUrl('/'), data)
	},

	async update(data: IStageDTO) {
		return axios.put<string>(getStageUrl(`/${data._id}`), {
			name: data?.name,
			color: data?.color,
		})
	},

	async moveRight(_id: string) {
		return axios.put<string>(getStageUrl(`/move-right/${_id}`), {})
	},

	async delete(_id: string) {
		return axios.delete<string>(getStageUrl(`/${_id}`))
	},
}
