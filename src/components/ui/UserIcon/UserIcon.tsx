import { FC } from 'react'

import styles from './UserIcon.module.scss'

import MaterialIcon from '../MaterialIcon'

interface IUserIcon {
	onClick: () => void
}

const UserIcon: FC<IUserIcon> = ({ onClick }) => {
	return (
		<div className={styles.user} onClick={() => onClick()}>
			<MaterialIcon name="MdAccountCircle" />
		</div>
	)
}
export default UserIcon
