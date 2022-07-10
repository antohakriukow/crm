import { FC } from 'react'

import Btn from '../../../../ui/Btn/Btn'

import styles from './CanbanItem.module.scss'

interface ICanbanItem {
	title: string
	date: string
	tasksCount: number
}

const CanbanItem: FC<ICanbanItem> = ({ title, date, tasksCount }) => {
	return (
		<div
			className={styles.item}
			draggable={true}
			onDragEnd={(e) => console.log(e)}
		>
			<div className={styles.item__data}>
				<h3 className={styles.item__title}>{title}</h3>
				<p className={styles.item__date}>{date}</p>
				<div className={styles.item__info}>
					<p className={styles.item__taskTitle}>Tasks</p>
					<span className={styles.item__taskCount}>{tasksCount}</span>
				</div>
			</div>
			<div className={styles.item__handlers}>
				<Btn onClick={() => null} icon="MdOutlineCall" color="#fff" />
				<Btn onClick={() => null} icon="MdOutlineMailOutline" color="#fff" />
				<Btn onClick={() => null} icon="MdOutlineMessage" color="#fff" />
				<Btn onClick={() => null} icon="MdOutlineClear" color="#fff" />
			</div>
		</div>
	)
}
export default CanbanItem
