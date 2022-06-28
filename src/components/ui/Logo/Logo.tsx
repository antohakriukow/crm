import { FC } from 'react'

import styles from './Logo.module.scss'

const Logo: FC = () => {
	return (
		<div className={styles.logo}>
			<p className={styles.logo__white}>Bitrix</p>
			<p className={styles.logo__blue}>24</p>
		</div>
	)
}
export default Logo
