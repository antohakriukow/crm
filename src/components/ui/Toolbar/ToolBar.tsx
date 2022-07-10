import React, { FC } from 'react'

import styles from './ToolBar.module.scss'

interface IToolbar {
	title: string
	children?: React.ReactNode
}

const ToolBar: FC<IToolbar> = ({ title, children }) => {
	return (
		<div className={styles.toolbar}>
			<h2 className={styles.toolbar__title}>{title}</h2>
			{children}
		</div>
	)
}
export default ToolBar
