import { FC } from 'react'

import styles from './Layout.module.scss'

import SideBar from './SideBar/SideBar'
import WorkSpace from './WorkSpace/WorkSpace'

const Layout: FC = () => {
	return (
		<>
			<SideBar />
			<WorkSpace />
		</>
	)
}
export default Layout
