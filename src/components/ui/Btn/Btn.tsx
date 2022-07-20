import { FC } from 'react'

import { TypeMaterialIconName } from '../../../shared/types/icon.types'

import styles from './Btn.module.scss'

import MaterialIcon from '../MaterialIcon'

interface IBtn {
	color?: string
	borderColor?: string
	text?: string
	icon?: TypeMaterialIconName
	onClick: (e: React.MouseEvent) => void
	id?: string
}

const Btn: FC<IBtn> = ({
	color = 'transparent',
	borderColor,
	text,
	icon,
	onClick,
	id,
}) => {
	return (
		<button
			id={id}
			className={styles.btn}
			onClick={onClick}
			style={{
				backgroundColor: color,
				border: `${borderColor} 1px solid`,
			}}
		>
			{icon && <MaterialIcon name={icon} />}
			{text && <p className={styles.btn__text}>{text}</p>}
		</button>
	)
}
export default Btn
