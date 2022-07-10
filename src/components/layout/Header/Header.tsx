import { FC } from 'react'
import { useSelector } from 'react-redux'

import Clock from '../../ui/Clock/Clock'
import Logo from '../../ui/Logo/Logo'
import MenuSwitcher from '../../ui/MenuSwitcher/MenuSwitcher'
import SearchField from '../../ui/SearchField/SearchField'
import UserIcon from '../../ui/UserIcon/UserIcon'

import { TypeRootState } from '../../../store/store'

import styles from './Header.module.scss'

const Header: FC = () => {
	const { isUser } = useSelector((state: TypeRootState) => state.user)

	return (
		<div className={styles.header}>
			<div className={styles.header_left}>
				<MenuSwitcher />
				<Logo />
			</div>
			{isUser && (
				<div className={styles.header_center}>
					<SearchField backgroundColor="#717a84" onClick={() => null} />
					<Clock />
				</div>
			)}
			{isUser && (
				<div className={styles.header_right}>
					<UserIcon />
				</div>
			)}
		</div>
	)
}
export default Header
