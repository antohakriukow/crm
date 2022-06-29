import { FC } from 'react'

import { toggleMenu } from '../../../store/ui/ui.slice'

import { useActions } from '../../../hooks/useActions'

import styles from './MenuSwitcher.module.scss'

import MaterialIcon from '../MaterialIcon'

const MenuSwitcher: FC = () => {
	const { toggleMenu } = useActions()

	return (
		<div className={styles.menu__switcher} onClick={() => toggleMenu()}>
			<MaterialIcon name="MdMenu" />
		</div>
	)
}

export default MenuSwitcher
