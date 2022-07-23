import { useTypedSelector } from './useTypedSelector'

export const useUI = () => useTypedSelector((state) => state.ui)
