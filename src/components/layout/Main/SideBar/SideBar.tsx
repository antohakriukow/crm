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
			<SideBarMenuItem name="MdOutlineTableChart" title="CRM" url="/" />
			<SideBarMenuItem name="MdCalendarToday" title="Calendar" url="/" />
			<SideBarMenuItem
				name="MdOutlinePermContactCalendar"
				title="Contacts"
				url="/"
			/>
			<SideBarMenuItem name="MdOutlineEmail" title="Email" url="/" />
		</div>
	)
}
export default SideBar
