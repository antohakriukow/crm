import { FC } from 'react'

import styles from './SearchField.module.scss'

import MaterialIcon from '../MaterialIcon'

const SearchField: FC = () => {
	return (
		<div className={styles.search}>
			<input className={styles.search__input} placeholder="search" />
			<MaterialIcon name="MdSearch" />
		</div>
	)
}
export default SearchField
