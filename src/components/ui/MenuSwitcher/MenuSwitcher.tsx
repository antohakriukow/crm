import { FC } from 'react'

import styles from './MenuSwitcher.module.scss'

import MaterialIcon from '../MaterialIcon'

const MenuSwitcher: FC = () => {
	return (
		<div className={styles.menu__switcher}>
			<MaterialIcon name="MdMenu" />
		</div>
	)
}

export default MenuSwitcher
