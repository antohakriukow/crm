import cn from 'classnames'
import React, { FC } from 'react'

import Btn from '../../../ui/Btn/Btn'
import Palette from '../../../ui/Palette/Palette'
import { usePalette } from '../../../ui/Palette/usePalette'

import { useCanbanColumn } from '../../../../hooks/useCanbanColumn'
import { useCanbanItem } from '../../../../hooks/useCanbanItem'

import { getDate } from '../../../../utils/date/getDate'

import styles from './Canban.module.scss'

import CanbanItem from './CanbanItem/CanbanItem'
import CanbanItemCreator from './CanbanItemCreator/CanbanItemCreator'

interface ICanbanColumn {
	column: {
		_id: string
		name: string
		position: number
		color: string
		owner: string
	}
}

const CanbanColumn: FC<ICanbanColumn> = ({ column }) => {
	const { data: response } = useCanbanItem()
	const { isPaletteOpened, togglePaletteOpened } = usePalette()

	const {
		openColumnEditor,
		createStage,
		updateColor,
		currentColumn,
		closeColumnEditor,
	} = useCanbanColumn()
	const activeColumn = currentColumn === column._id

	const handleCreateStage = async (e: React.BaseSyntheticEvent) => {
		const currentPosition = e.currentTarget.dataset.position
		console.log(currentPosition)
		await createStage({
			name: 'Stage 1',
			color: '#a1a6ac',
			position: +currentPosition + 1,
		})
	}

	const handleUpdateColor = async (e: React.MouseEvent) => {
		await updateColor({
			_id: currentColumn,
			color: e.currentTarget.id,
		})
	}

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		const draggingObject = e.dataTransfer.getData('text')
		const targetColumn = {
			id: e.currentTarget.id,
			col: e.currentTarget.dataset['columnId'],
			pos: e.currentTarget.dataset['ColumnPosition'],
		}
		console.log('draggingObject: ', JSON.parse(draggingObject))
		console.log('targetCol: ', targetColumn)
	}

	return (
		<>
			<div
				onDragOver={handleDragOver}
				onDrop={handleDrop}
				className={styles.canban__column}
				draggable={true}
				id={column._id}
				data-column-id={column._id}
				data-column-position={column.position}
			>
				<div
					className={styles.canban__columnHeader}
					style={{ backgroundColor: column.color }}
				>
					{activeColumn && isPaletteOpened && (
						<Palette onClick={(e) => handleUpdateColor(e)} />
					)}
					<div className={styles.canban__columnInfo}>
						<div
							contentEditable={activeColumn}
							className={cn(styles.canban__columnName, {
								[styles.editable]: activeColumn,
							})}
						>
							{column.name}
						</div>
						<p
							className={cn(styles.canban__columnCounter, {
								[styles.hidden]: activeColumn,
							})}
						>{`(${
							response?.data.filter((d) => d.stage === column._id).length
						})`}</p>
					</div>

					<div className={styles.canban__columnTools}>
						{activeColumn && (
							<Btn
								id={column._id}
								onClick={togglePaletteOpened}
								icon="MdOutlinePalette"
							/>
						)}
						{activeColumn ? (
							<Btn
								id={column._id}
								onClick={closeColumnEditor}
								icon="MdOutlineClear"
							/>
						) : (
							<Btn
								id={column._id}
								onClick={(e) => openColumnEditor(e)}
								icon="MdModeEditOutline"
							/>
						)}
						<Btn
							dataPosition={column.position}
							onClick={(e) => handleCreateStage(e)}
							icon="MdAdd"
						/>
					</div>
				</div>
				<CanbanItemCreator stage={column._id} />
				{response &&
					response.data
						.filter((c) => c.stage === column._id)
						.sort((a, b) => a.position - b.position)
						.map((c) => (
							<CanbanItem
								title={c.title}
								tasksCount={0}
								date={getDate(c.createdAt)}
								key={c._id}
								id={c._id}
								position={c.position}
								stage={c.stage}
								color={column.color}
							/>
						))}
			</div>
		</>
	)
}
export default CanbanColumn
