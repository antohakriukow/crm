import { FC } from 'react'

import styles from './Canban.module.scss'

import { canbanColumns } from '../../../../data/crm/crm.data'

import CanbanColumn from './CanbanColumn'

const Canban: FC = () => {
	return (
		<div className={styles.canban}>
			{canbanColumns.map((col) => (
				<CanbanColumn column={col} />
			))}
		</div>
	)
}
export default Canban
