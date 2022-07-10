import { FC } from 'react'

import styles from './Crm.module.scss'

import Canban from './Canban/Canban'
import CrmToolbar from './CrmToolbar/CrmToolbar'
import CrmTools from './CrmTools/CrmTools'

export const Crm: FC = () => {
	return (
		<div className={styles.crm}>
			<CrmToolbar />
			<CrmTools />
			<Canban />
		</div>
	)
}
export default Crm
