import { FC } from 'react'

import styles from './Main.module.scss'

import SideBar from './SideBar/SideBar'
import WorkSpace from './WorkSpace/WorkSpace'

const Layout: FC = () => {
	return (
		<div className={styles.main}>
			<SideBar />
			<WorkSpace />
		</div>
	)
}
export default Layout
