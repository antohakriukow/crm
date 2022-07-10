import { FC } from 'react'

import { useStage } from '../../../../hooks/useStage'

import styles from './Canban.module.scss'

import CanbanColumn from './CanbanColumn'

const Canban: FC = () => {
	const { data: response } = useStage()
	return (
		<div className={styles.canban}>
			{response && response.data.map((col) => <CanbanColumn column={col} />)}
		</div>
	)
}
export default Canban
