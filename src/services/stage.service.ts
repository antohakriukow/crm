import { IStage, IStageDTO } from '../shared/types/crm.interface'

import { getStageUrl } from '../config/api.config'

import axios from '../api/interceptors'

export const StageService = {
	async getAll() {
		return axios.get<IStage[]>(getStageUrl(''))
	},

	async getById(_id: string) {
		return axios.get<IStage>(getStageUrl(`/${_id}`))
	},

	async create(data: IStageDTO) {
		return axios.post<string>(getStageUrl('/'), data)
	},

	async update(data: IStageDTO) {
		return axios.put<string>(getStageUrl(`/${data._id}`), {
			name: data?.name,
			color: data?.color,
		})
	},

	async delete(_id: string) {
		return axios.delete<string>(getStageUrl(`/${_id}`))
	},
}
