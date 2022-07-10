import { useMutation, useQuery } from 'react-query'

import { DealService } from '../services/deal.service'
import { StageService } from '../services/stage.service'

import { toastError } from '../utils/toastr-error'

export const useDeal = () => {
	const queryData = useQuery(['Deal list'], () => DealService.getAll(), {
		onError(error) {
			toastError(error, 'Deal list')
		},
	})

	return { ...queryData }
}
