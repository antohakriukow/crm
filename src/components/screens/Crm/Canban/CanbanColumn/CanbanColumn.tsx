import cn from 'classnames'
import React, { FC } from 'react'

import Btn from '../../../../ui/Btn/Btn'
import Palette from '../../../../ui/Palette/Palette'
import { usePalette } from '../../../../ui/Palette/usePalette'

import { getDate } from '../../../../../utils/date/getDate'

import styles from './CanbanColumn.module.scss'

import CanbanItem from '../CanbanItem/CanbanItem'
import { useCanbanItem } from '../CanbanItem/useCanbanItem'
import { useDragItem } from '../CanbanItem/useDragItem'
import CanbanItemCreator from '../CanbanItemCreator/CanbanItemCreator'

import { useCanbanColumn } from './useCanbanColumn'

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
	const { handleDragOver, handleOnColumnDrop } = useDragItem()

	const {
		openColumnEditor,
		createStage,
		updateColor,
		updateStageName,
		closeColumnEditor,
		deleteStage,
		currentColumn,
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
		console.log(e.currentTarget)
		await updateColor({
			_id: currentColumn,
			color: e.currentTarget.id,
		})
	}

	const handleUpdateName = async (e: React.MouseEvent) => {
		console.log(e.target)
		// await updateStageName({
		// 	_id: currentColumn,
		// 	color: e.currentTarget.id,
		// })
	}

	return (
		<>
			<div
				onDragOver={handleDragOver}
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
							{activeColumn && (
								<div className={styles.canban__columnNameTools}>
									<Btn
										id={column._id}
										onClick={(e) => handleUpdateName(e)}
										icon="MdDone"
									/>
								</div>
							)}
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
						{/* {activeColumn && (
							<Btn
								id={column._id}
								onClick={togglePaletteOpened}
								icon="MdOutlinePalette"
							/>
						)} */}
						{activeColumn ? (
							<Btn
								id={column._id}
								onClick={togglePaletteOpened}
								icon="MdOutlinePalette"
							/>
						) : (
							<Btn
								id={column._id}
								onClick={(e) => openColumnEditor(e)}
								icon="MdModeEditOutline"
							/>
						)}
						<Btn
							id={column._id}
							onClick={
								activeColumn
									? closeColumnEditor
									: (e) => deleteStage(e.currentTarget.id)
							}
							icon="MdOutlineClear"
						/>

						<Btn
							dataPosition={column.position}
							onClick={(e) => handleCreateStage(e)}
							icon="MdAdd"
						/>
					</div>
				</div>
				<CanbanItemCreator stage={column._id} />
				<div
					className={styles.canban__columnArea}
					onDrop={handleOnColumnDrop}
					id={column._id}
					data-column-id={column._id}
				>
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
			</div>
		</>
	)
}
export default CanbanColumn
