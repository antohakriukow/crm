import cn from 'classnames'
import { FC, forwardRef } from 'react'

import styles from './form.module.scss'

import { IField } from './form.interface'

const Field = forwardRef<HTMLInputElement, IField>(
	({ placeholder, error, type = 'text', style, ...props }, ref) => {
		return (
			<div className={cn(styles.common, styles.field)} style={style}>
				<label>
					<span>{placeholder}</span>
					<input ref={ref} type={type} {...props} />
				</label>
				{error && <div className={styles.error}>{error.message}</div>}
			</div>
		)
	}
)

Field.displayName = 'Field'

export default Field
