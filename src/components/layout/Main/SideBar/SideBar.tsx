import cn from 'classnames'
import { FC } from 'react'
import { useSelector } from 'react-redux'

import { TypeRootState } from '../../../../store/store'

import styles from './SideBar.module.scss'

import SideBarMenuItem from './SideBarMenuItem'

const SideBar: FC = () => {
	const { isMenuOpened } = useSelector((state: TypeRootState) => state.ui)
	return (
		<div
			className={cn(styles.sidebar, {
				[styles.sidebar_opened]: isMenuOpened,
			})}
		>
			<SideBarMenuItem name="MdOutlineTableChart" title="CRM" url="/crm" />
			<SideBarMenuItem
				name="MdCalendarToday"
				title="Calendar"
				url="/calendar"
			/>
			<SideBarMenuItem
				name="MdOutlineContacts"
				title="Contacts"
				url="/contacts"
			/>
			<SideBarMenuItem name="MdOutlineEmail" title="Email" url="/email" />
		</div>
	)
}
export default SideBar
