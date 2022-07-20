import { useSelector } from 'react-redux'

import { useActions } from '../../../hooks/useActions'

import { TypeRootState } from '../../../store/store'

export const usePalette = () => {
	const { togglePaletteOpened } = useActions()
	const { isPaletteOpened } = useSelector((state: TypeRootState) => state.ui)

	return { isPaletteOpened, togglePaletteOpened }
}
