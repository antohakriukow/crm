import React, { FC } from 'react'

import Btn from '../../../../ui/Btn/Btn'

import styles from './CanbanItem.module.scss'

import { useCanbanItem } from './useCanbanItem'
import { useDragItem } from './useDragItem'

interface ICanbanItem {
	id: string
	position: number
	title: string
	date: string
	tasksCount: number
	stage: string
	color: string
}

const CanbanItem: FC<ICanbanItem> = ({
	id,
	position,
	title,
	date,
	tasksCount,
	stage,
	color,
}) => {
	const { handleDeleteItem } = useCanbanItem()
	const { handleDragStart, handleDragOver, handleOnItemDrop } = useDragItem()

	return (
		<div
			// id={id}
			data-card-id={id}
			data-card-position={position}
			data-card-column={stage}
			className={styles.item}
			style={{ borderLeft: `3px ${color} solid` }}
			draggable={true}
			onDragStart={handleDragStart}
			onDragOver={handleDragOver}
			onDrop={handleOnItemDrop}
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
				<Btn
					id={id}
					onClick={(e) => handleDeleteItem(e)}
					icon="MdOutlineClear"
					color="#fff"
				/>
			</div>
		</div>
	)
}
export default CanbanItem
