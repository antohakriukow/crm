import React, { FC } from 'react'

import Btn from '../../../../ui/Btn/Btn'

import { useCanbanItem } from '../../../../../hooks/useCanbanItem'

import styles from './CanbanItem.module.scss'

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
	const { deleteItem } = useCanbanItem()

	const handleDeleteItem = async (e: React.MouseEvent) => {
		console.log({ deals: [e.currentTarget.id] })
		await deleteItem({ deals: [e.currentTarget.id] })
	}

	const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		const draggingObject = {
			id: e.currentTarget.dataset['cardId'],
			pos: e.currentTarget.dataset['cardPosition'],
			col: e.currentTarget.dataset['cardColumn'],
		}
		// console.log('obj: ', e.currentTarget.dataset)
		e.dataTransfer.setData('text', JSON.stringify(draggingObject))
	}

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		const targetItem = {
			id: e.currentTarget.dataset['cardId'],
			pos: e.currentTarget.dataset['cardPosition'],
			col: e.currentTarget.dataset['cardColumn'],
		}

		console.log('targetItem: ', targetItem)
	}

	return (
		<div
			id={id}
			data-card-id={id}
			data-card-position={position}
			data-card-column={stage}
			className={styles.item}
			style={{ borderLeft: `3px ${color} solid` }}
			draggable={true}
			onDragStart={handleDragStart}
			onDragOver={handleDragOver}
			onDrop={handleDrop}
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
