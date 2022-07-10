import { FC } from 'react'
import { useSelector } from 'react-redux'

import { useActions } from '../../../hooks/useActions'

import { TypeRootState } from '../../../store/store'

import styles from './MenuSwitcher.module.scss'

import MaterialIcon from '../MaterialIcon'

const MenuSwitcher: FC = () => {
	const { toggleMenu } = useActions()
	const { user } = useSelector((state: TypeRootState) => state.user)

	return (
		<div className={styles.menu__switcher} onClick={() => toggleMenu()}>
			{user && <MaterialIcon name="MdMenu" />}
		</div>
	)
}

export default MenuSwitcher
