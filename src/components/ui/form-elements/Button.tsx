import cn from 'classnames'
import { FC } from 'react'

import styles from './form.module.scss'

import { IButton } from './form.interface'

const Button: FC<IButton> = ({ children, className, ...props }) => {
	return (
		<button className={cn(styles.button, className)} {...props}>
			{children}
		</button>
	)
}
export default Button
