import { FC } from 'react'

import styles from './Palette.module.scss'

import { paletteColors } from '../../../data/colors.data'

interface IPalette {
	onClick: (e: React.MouseEvent) => void
}

const Palette: FC<IPalette> = ({ onClick }) => {
	return (
		<div className={styles.palette__container}>
			<div className={styles.palette__arrow} />
			<div className={styles.palette__area}>
				{paletteColors &&
					paletteColors.map((hex) => (
						<div
							onClick={onClick}
							className={styles.palette__item}
							style={{ backgroundColor: hex }}
							id={hex}
						/>
					))}
			</div>
		</div>
	)
}
export default Palette
