import { FC } from 'react'
import { useSelector } from 'react-redux'

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

	return (
		<div className={styles.item__container}>
			<a href={url} className={styles.item}>
				<MaterialIcon name={name} />
				{isMenuOpened && <p className={styles.title}>{title}</p>}
			</a>
		</div>
	)
}
export default SideBarMenuItem
