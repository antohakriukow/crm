import { useMutation, useQuery } from 'react-query'

import { DealService } from '../../../../../services/deal.service'

import {
	IDealDTO,
	IDeleteDealsStageDTO,
	IUpdateDealsStageDTO,
} from '../../../../../shared/types/crm.interface'

import { toastError } from '../../../../../utils/toastr-error'

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

	const { mutateAsync: updateItemsStage } = useMutation(
		'update deal stage',
		(data: IUpdateDealsStageDTO) => DealService.updateDealsStage(data),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	const handleDeleteItem = async (e: React.MouseEvent) =>
		await deleteItem({ deals: [e.currentTarget.id] })

	const handleUpdateItemsStage = async (data: IUpdateDealsStageDTO) => {
		await updateItemsStage(data)
	}

	return { ...queryData, createItem, handleDeleteItem, handleUpdateItemsStage }
}
