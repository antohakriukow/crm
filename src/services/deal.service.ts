import {
	IDeal,
	IDealDTO,
	IDeleteDealsStageDTO,
	IUpdateDealsStageDTO,
} from '../shared/types/crm.interface'

import { getDealUrl } from '../config/api.config'

import axios from '../api/interceptors'

export const DealService = {
	async getAll() {
		return axios.get<IDeal[]>(getDealUrl(''))
	},

	async getById(_id: string) {
		return axios.get<IDeal>(getDealUrl(`/${_id}`))
	},

	async getByStage(stageId: string) {
		return axios.get<IDeal>(getDealUrl(`/stage/${stageId}`))
	},

	async create(data: IDealDTO) {
		return axios.post<string>(getDealUrl('/'), data)
	},

	async update(_id: string, data: IDealDTO) {
		return axios.put<string>(getDealUrl(`/${_id}`), data)
	},

	async updateDealsStage(data: IUpdateDealsStageDTO) {
		return axios.put<string>(getDealUrl(`/stage`), data)
	},

	async delete(data: IDeleteDealsStageDTO) {
		console.log('service data: ', data)
		return axios.delete<IDeal[]>(getDealUrl(`/`), { data })
	},
}
