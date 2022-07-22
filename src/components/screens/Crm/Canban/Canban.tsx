import { FC } from 'react'

import styles from './Canban.module.scss'

import CanbanColumn from './CanbanColumn/CanbanColumn'
import { useCanbanColumn } from './CanbanColumn/useCanbanColumn'

const Canban: FC = () => {
	const { data: response } = useCanbanColumn()
	return (
		<div className={styles.canban}>
			{response &&
				response.data
					.sort((a, b) => a.position - b.position)
					.map((col) => <CanbanColumn column={col} key={col._id} />)}
		</div>
	)
}
export default Canban
