import { useState } from 'react'

import { DealService } from '../../../../../services/deal.service'

import { useCanbanItem } from './useCanbanItem'

export const useDragItem = () => {
	const { handleUpdateItemsStage } = useCanbanItem()
	// const [draggingObject, setDraggingObject] = useState({})
	// const [targetColumn, setTargetColumn] = useState()
	// const [targetItem, setTargetItem] = useState()

	const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
		const draggingObject = {
			id: e.currentTarget.dataset['cardId'],
			pos: e.currentTarget.dataset['cardPosition'],
			col: e.currentTarget.dataset['cardColumn'],
		}
		e.dataTransfer.setData('text', JSON.stringify(draggingObject))
	}

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	const handleOnItemDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		const targetItem = {
			id: e.currentTarget.dataset['cardId'],
			pos: e.currentTarget.dataset['cardPosition'],
			col: e.currentTarget.dataset['cardColumn'],
		}

		console.log('targetItem: ', targetItem)
	}

	const handleOnColumnDrop = async (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		const draggingObject = JSON.parse(e.dataTransfer.getData('text'))
		const targetColumn = {
			id: e.currentTarget.id,
			col: e.currentTarget.dataset['columnId'],
			pos: e.currentTarget.dataset['ColumnPosition'],
		}
		const data = {
			deals: [draggingObject.id],
			stage: targetColumn.id,
		}
		await handleUpdateItemsStage(data)
	}

	return {
		handleDragStart,
		handleDragOver,
		handleOnItemDrop,
		handleOnColumnDrop,
	}
}
