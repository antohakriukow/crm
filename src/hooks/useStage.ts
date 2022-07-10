import { useMutation, useQuery } from 'react-query'

import { StageService } from '../services/stage.service'

import { toastError } from '../utils/toastr-error'

export const useStage = () => {
	const queryData = useQuery(['stage list'], () => StageService.getAll(), {
		onError(error) {
			toastError(error, 'Stage list')
		},
	})

	return { ...queryData }
}
