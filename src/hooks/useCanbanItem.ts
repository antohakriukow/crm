import { useMutation, useQuery } from 'react-query'

import { DealService } from '../services/deal.service'
import { StageService } from '../services/stage.service'

import { IDealDTO, IDeleteDealsStageDTO } from '../shared/types/crm.interface'

import { toastError } from '../utils/toastr-error'

export const useCanbanItem = () => {
	const queryData = useQuery(['Deal list'], () => DealService.getAll(), {
		onError(error) {
			toastError(error, 'Deal list')
		},
	})

	const { mutateAsync: createItem } = useMutation(
		'create deal',
		(data: IDealDTO) => DealService.create(data),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: deleteItem } = useMutation(
		'delete deal',
		(data: IDeleteDealsStageDTO) => DealService.delete(data),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	return { ...queryData, createItem, deleteItem }
}
