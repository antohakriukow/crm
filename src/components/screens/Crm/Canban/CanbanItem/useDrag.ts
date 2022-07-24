import { useCanbanItem } from './useCanbanItem'

export const useDrag = () => {
	const { handleUpdateItemsStage } = useCanbanItem()

	const handleDragItemStart = (e: React.DragEvent<HTMLDivElement>) => {
		const draggingObject = {
			id: e.currentTarget.dataset['cardId'],
			position: e.currentTarget.dataset['cardPosition'],
			column: e.currentTarget.dataset['cardColumn'],
		}
		e.dataTransfer.setData('text', JSON.stringify(draggingObject))
	}

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
	}

	const handleOnItemDrop = async (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()

		const draggingObject = JSON.parse(e.dataTransfer.getData('text'))

		const data = {
			deals: [draggingObject.id],
			stage: String(e.currentTarget.dataset['cardColumn']),
			position: Number(e.currentTarget.dataset['cardPosition']),
		}
		await handleUpdateItemsStage(data)
	}

	const handleOnColumnDrop = async (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()

		const draggingObject = JSON.parse(e.dataTransfer.getData('text'))

		const data = {
			deals: [draggingObject.id],
			stage: String(e.currentTarget.dataset['columnId']),
			position: 0,
		}
		await handleUpdateItemsStage(data)
	}

	return {
		handleDragItemStart,
		handleDragOver,
		handleOnItemDrop,
		handleOnColumnDrop,
	}
}
