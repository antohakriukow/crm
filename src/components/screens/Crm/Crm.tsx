import { FC } from 'react'

import Btn from '../../ui/Btn/Btn'
import SearchField from '../../ui/SearchField/SearchField'
import ToolBar from '../../ui/Toolbar/ToolBar'

import styles from './Crm.module.scss'

export const Crm: FC = () => {
	return (
		<div className={styles.crm}>
			<ToolBar title="CRM">
				<Btn
					color="#bbed21"
					text="Add card"
					icon="MdOutlineAdd"
					onClick={() => null}
				/>
				<SearchField
					form="square"
					borderColor="#535c69"
					backgroundColor="transparent"
					textColor="#535c69"
					onClick={() => null}
				/>
				<Btn
					color="transparent"
					borderColor="#535c69"
					icon="MdOutlineAdd"
					onClick={() => null}
				/>
			</ToolBar>
		</div>
	)
}
export default Crm
