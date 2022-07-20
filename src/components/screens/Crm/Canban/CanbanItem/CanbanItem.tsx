import React, { FC, useEffect, useState } from 'react'

import Btn from '../../../../ui/Btn/Btn'

import { useCanbanItem } from '../../../../../hooks/useCanbanItem'

import styles from './CanbanItem.module.scss'

interface ICanbanItem {
	id: string
	title: string
	date: string
	tasksCount: number
	stage: string
	color: string
}

const CanbanItem: FC<ICanbanItem> = ({
	id,
	title,
	date,
	tasksCount,
	stage,
	color,
}) => {
	const { deleteItem } = useCanbanItem()
	const [column, setColumn] = useState({})
	const [] = useState({})

	useEffect(() => console.log('end', column), [column, setColumn])

	const handleDeleteItem = async (e: React.MouseEvent) => {
		console.log({ deals: [e.currentTarget.id] })
		await deleteItem({ deals: [e.currentTarget.id] })
	}

	return (
		<div
			id={id}
			data-column={stage}
			className={styles.item}
			style={{ borderLeft: `3px ${color} solid` }}
			draggable={true}
			onDragStart={(e) => console.log('start:', e.currentTarget.id)}
			onDragOver={(e) => setColumn(e.currentTarget.dataset)}
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
