import { FC } from 'react'

import Clock from '../../ui/Clock/Clock'
import Logo from '../../ui/Logo/Logo'
import MenuSwitcher from '../../ui/MenuSwitcher/MenuSwitcher'
import SearchField from '../../ui/SearchField/SearchField'
import UserIcon from '../../ui/UserIcon/UserIcon'

import styles from './Header.module.scss'

const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.header_left}>
				<MenuSwitcher />
				<Logo />
			</div>
			<div className={styles.header_center}>
				<SearchField />
				<Clock />
			</div>
			<div className={styles.header_right}>
				<UserIcon />
			</div>
		</div>
	)
}
export default Header
