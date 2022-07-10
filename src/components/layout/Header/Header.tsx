import { FC } from 'react'
import { useSelector } from 'react-redux'

import Clock from '../../ui/Clock/Clock'
import Logo from '../../ui/Logo/Logo'
import MenuSwitcher from '../../ui/MenuSwitcher/MenuSwitcher'
import SearchField from '../../ui/SearchField/SearchField'
import UserIcon from '../../ui/UserIcon/UserIcon'

import { useActions } from '../../../hooks/useActions'

import { TypeRootState } from '../../../store/store'

import styles from './Header.module.scss'

import UserMenu from './UserMenu/UserMenu'

const Header: FC = () => {
	const { user } = useSelector((state: TypeRootState) => state.user)
	const { toggleUSerMenu } = useActions()

	return (
		<div className={styles.header}>
			<div className={styles.header_left}>
				<MenuSwitcher />
				<Logo />
			</div>
			{user && (
				<div className={styles.header_center}>
					<SearchField backgroundColor="#717a84" onClick={() => null} />
					<Clock />
				</div>
			)}
			{user && (
				<div className={styles.header_right}>
					<UserIcon onClick={toggleUSerMenu} />
					<UserMenu />
				</div>
			)}
		</div>
	)
}
export default Header
