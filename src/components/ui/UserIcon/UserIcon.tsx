import { FC } from 'react'

import styles from './UserIcon.module.scss'

import MaterialIcon from '../MaterialIcon'

const UserIcon: FC = () => {
	return (
		<div className={styles.user}>
			<MaterialIcon name="MdAccountCircle" />
		</div>
	)
}
export default UserIcon
