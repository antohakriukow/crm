import { FC, MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

import MaterialIcon from '../../../ui/MaterialIcon'

import { useActions } from '../../../../hooks/useActions'

import { TypeRootState } from '../../../../store/store'

import styles from './UserMenu.module.scss'

const UserMenu: FC = () => {
	const { isUserMenuOpened } = useSelector((state: TypeRootState) => state.ui)
	const { logout } = useActions()

	const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		logout()
	}

	if (!isUserMenuOpened) return null
	return (
		<div className={styles.menu__container}>
			<div className={styles.menu}>
				<a className={styles.menu__item} onClick={logoutHandler}>
					<MaterialIcon name="MdLogout" />
					<span className={styles.menu__itemTitle}>Logout</span>
				</a>
				<a className={styles.menu__item}>
					<MaterialIcon name="MdSettings" />
					<span className={styles.menu__itemTitle}>Profile</span>
				</a>
			</div>
		</div>
	)
}
export default UserMenu
