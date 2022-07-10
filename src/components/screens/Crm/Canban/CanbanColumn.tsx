import { FC } from 'react'

import styles from './Canban.module.scss'

import { cards } from '../../../../data/crm/crm.data'

import CanbanItem from './CanbanItem/CanbanItem'

interface ICanbanColumn {
	column: {
		_id: string
		name: string
	}
}

const CanbanColumn: FC<ICanbanColumn> = ({ column }) => {
	return (
		<div className={styles.canban__column}>
			<div className={styles.canban__columnName}>{column.name}</div>
			{cards
				.filter((c) => c.column === column._id)
				.map((c) => (
					<CanbanItem
						title={c.title}
						tasksCount={c.tasksCount}
						date={c.createdAt}
					/>
				))}
		</div>
	)
}
export default CanbanColumn
