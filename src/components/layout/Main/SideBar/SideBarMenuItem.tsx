import cn from 'classnames'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink, useLocation } from 'react-router-dom'

import MaterialIcon from '../../../ui/MaterialIcon'

import { TypeMaterialIconName } from '../../../../shared/types/icon.types'

import { TypeRootState } from '../../../../store/store'

import styles from './SideBar.module.scss'

interface ISideBarMenuItem {
	name: TypeMaterialIconName
	title: string
	url: string
}

const SideBarMenuItem: FC<ISideBarMenuItem> = ({ name, title, url }) => {
	const { isMenuOpened } = useSelector((state: TypeRootState) => state.ui)
	const { pathname } = useLocation()
	const isActive = url === pathname

	return (
		<NavLink
			draggable={false}
			to={url}
			className={cn(styles.item, {
				[styles.item_active]: isActive,
			})}
		>
			<MaterialIcon name={name} />
			{isMenuOpened && <p className={styles.title}>{title}</p>}
		</NavLink>
	)
}
export default SideBarMenuItem
