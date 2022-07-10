import { IDeal, IStage, IStageDTO } from '../shared/types/crm.interface'

import { getDealUrl, getStageUrl } from '../config/api.config'

import axios from '../api/interceptors'

export const DealService = {
	async getAll() {
		return axios.get<IDeal[]>(getDealUrl(''))
	},

	// async getById(_id: string) {
	// 	return axios.get<IStage>(getStageUrl(`/${_id}`))
	// },

	// async create(data: IStageDTO) {
	// 	return axios.post<string>(getStageUrl('/'), data)
	// },

	// async update(_id: string, data: IStageDTO) {
	// 	return axios.put<string>(getStageUrl(`/${_id}`), data)
	// },

	// async delete(_id: string) {
	// 	return axios.delete<string>(getStageUrl(`/${_id}`))
	// },
}
