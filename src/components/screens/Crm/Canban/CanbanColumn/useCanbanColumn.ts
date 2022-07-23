import { useMutation, useQuery } from 'react-query'
import { useSelector } from 'react-redux'

import { useActions } from '../../../../../hooks/useActions'

import { StageService } from '../../../../../services/stage.service'

import {
	ICreateStageDTO,
	IDeleteDealsStageDTO,
	IStageDTO,
} from '../../../../../shared/types/crm.interface'

import { toastError } from '../../../../../utils/toastr-error'

import { TypeRootState } from '../../../../../store/store'

export const useCanbanColumn = () => {
	const { setEditColumnId } = useActions()
	const { editColumnId: currentColumn } = useSelector(
		(state: TypeRootState) => state.ui
	)
	const queryData = useQuery(['stage list'], () => StageService.getAll(), {
		onError(error) {
			toastError(error, 'Stage list')
		},
	})

	const openColumnEditor = (e: React.MouseEvent) => {
		const { id } = e.currentTarget
		setEditColumnId(id)
	}
	const closeColumnEditor = () => setEditColumnId('')

	const { mutateAsync: updateColor } = useMutation(
		'update column color',
		(data: IStageDTO) => StageService.update(data),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: updateStageName } = useMutation(
		'update column name',
		(data: IStageDTO) => StageService.update(data),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: createStage } = useMutation(
		'create column',
		(data: ICreateStageDTO) => StageService.create(data),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	const { mutateAsync: deleteStage } = useMutation(
		'delete column',
		(_id: string) => StageService.delete(_id),
		{
			onSuccess() {
				queryData.refetch()
			},
		}
	)

	return {
		...queryData,
		openColumnEditor,
		closeColumnEditor,
		updateColor,
		createStage,
		updateStageName,
		deleteStage,
		currentColumn,
	}
}
