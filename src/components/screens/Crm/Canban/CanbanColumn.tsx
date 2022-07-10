import { FC } from 'react'
import { useQuery } from 'react-query'

import { useDeal } from '../../../../hooks/useDeal'
import { useStage } from '../../../../hooks/useStage'

import { StageService } from '../../../../services/stage.service'

import styles from './Canban.module.scss'

import { cards } from '../../../../data/crm/crm.data'

import CanbanItem from './CanbanItem/CanbanItem'

interface ICanbanColumn {
	column: {
		_id: string
		name: string
		color: string
		owner: string
	}
}

const CanbanColumn: FC<ICanbanColumn> = ({ column }) => {
	const { data: response } = useDeal()
	console.log(response)
	return (
		<div className={styles.canban__column}>
			<div className={styles.canban__columnName}>{column.name}</div>
			<div></div>
			{response &&
				response.data
					.filter((c) => c.stage === column._id)
					.map((c) => (
						<CanbanItem
							title={c.title}
							tasksCount={0}
							date={c.createdAt}
							key={c._id}
						/>
					))}
		</div>
	)
}
export default CanbanColumn
