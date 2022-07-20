import { useMutation, useQuery } from 'react-query'
import { useSelector } from 'react-redux'

import { StageService } from '../services/stage.service'

import { IStageDTO } from '../shared/types/crm.interface'

import { toastError } from '../utils/toastr-error'

import { TypeRootState } from '../store/store'

import { useActions } from './useActions'

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

	const addColumn = () => null

	return {
		...queryData,
		openColumnEditor,
		closeColumnEditor,
		updateColor,
		addColumn,
		currentColumn,
	}
}
