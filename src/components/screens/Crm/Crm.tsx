import { FC } from 'react'

import ToolBar from '../../ui/Toolbar/ToolBar'

import styles from './Crm.module.scss'

export const Crm: FC = () => {
	return (
		<div className={styles.crm}>
			<ToolBar />
		</div>
	)
}
export default Crm
