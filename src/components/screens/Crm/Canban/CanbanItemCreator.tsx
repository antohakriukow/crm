import React, { FC } from 'react'

import Btn from '../../../ui/Btn/Btn'
import MaterialIcon from '../../../ui/MaterialIcon'

import { useCanbanItem } from '../../../../hooks/useCanbanItem'

import styles from './Canban.module.scss'

interface ICanbanItemCreator {
	stage: string
}

const CanbanItemCreator: FC<ICanbanItemCreator> = ({ stage }) => {
	const { createItem } = useCanbanItem()
	const handleCreateItem = async () => {
		await createItem({
			position: 0,
			title: 'Deal #4',
			description: 'Very big deal MF',
			stage: stage,
		})
	}

	return (
		<div
			id={stage}
			onClick={() => handleCreateItem()}
			className={styles.canban__itemCreator}
		>
			<MaterialIcon name="MdAdd" />
		</div>
	)
}
export default CanbanItemCreator
