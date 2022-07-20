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
import CanbanItemCreator from './CanbanItemCreator'

interface ICanbanColumn {
	column: {
		_id: string
		name: string
		color: string
		owner: string
	}
}

const CanbanColumn: FC<ICanbanColumn> = ({ column }) => {
	const { data: response } = useCanbanItem()
	const { isPaletteOpened, togglePaletteOpened } = usePalette()

	const {
		openColumnEditor,
		addColumn,
		updateColor,
		currentColumn,
		closeColumnEditor,
	} = useCanbanColumn()
	const activeColumn = currentColumn === column._id

	const handleUpdateColor = async (e: React.MouseEvent) => {
		await updateColor({
			_id: currentColumn,
			color: e.currentTarget.id,
		})
	}

	return (
		<>
			<div className={styles.canban__column} draggable={true} id={column._id}>
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
						<Btn onClick={() => null} icon="MdAdd" />
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
								stage={c.stage}
								color={column.color}
							/>
						))}
			</div>
		</>
	)
}
export default CanbanColumn
