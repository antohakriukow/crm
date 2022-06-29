import { FC } from 'react'
import { useSelector } from 'react-redux'

import { toggleMenu } from '../../../store/ui/ui.slice'

import { useActions } from '../../../hooks/useActions'

import { TypeRootState } from '../../../store/store'

import styles from './MenuSwitcher.module.scss'

import MaterialIcon from '../MaterialIcon'

const MenuSwitcher: FC = () => {
	const { toggleMenu } = useActions()
	const { isUser } = useSelector((state: TypeRootState) => state.user)

	return (
		<div className={styles.menu__switcher} onClick={() => toggleMenu()}>
			{isUser && <MaterialIcon name="MdMenu" />}
		</div>
	)
}

export default MenuSwitcher
