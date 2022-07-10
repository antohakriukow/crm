import { FC } from 'react'

import styles from './SearchField.module.scss'

import MaterialIcon from '../MaterialIcon'

interface ISearchField {
	backgroundColor?: string | 'transparent'
	borderColor?: string | 'transparent'
	textColor?: string | 'white'
	form?: 'square' | 'rounded'
	onClick?: () => void
}

const SearchField: FC<ISearchField> = ({
	backgroundColor,
	borderColor,
	textColor,
	form,
	onClick,
}) => {
	const getForm = () => (form === 'square' ? '0px' : '9999px')
	return (
		<div
			className={styles.search}
			style={{
				backgroundColor: backgroundColor,
				border: `${borderColor} solid 1px`,
				borderRadius: getForm(),
			}}
		>
			<input
				className={styles.search__input}
				placeholder="search"
				style={{
					color: textColor,
				}}
			/>
			<button className={styles.search__btn} onClick={onClick}>
				<MaterialIcon name="MdSearch" />
			</button>
		</div>
	)
}
export default SearchField
