import cn from 'classnames'
import React, { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import MaterialIcon from '../../../../ui/MaterialIcon'
import Button from '../../../../ui/form-elements/Button'

import styles from './CanbanItemCreator.module.scss'

import { IDealEditInput } from '../Canban.interface'
import { useCanbanItem } from '../CanbanItem/useCanbanItem'

import CanbanItemCreatorFields from './CanbanItemCreatorFields'

interface ICanbanItemCreator {
	stage: string
}

const CanbanItemCreator: FC<ICanbanItemCreator> = ({ stage }) => {
	const [isRedactorOpened, setIsRedactorOpened] = useState(false)
	const { createItem } = useCanbanItem()

	const { handleSubmit, register, reset, formState } = useForm<IDealEditInput>({
		mode: 'onChange',
	})

	const onSubmit: SubmitHandler<IDealEditInput> = async (data) => {
		console.log(data)
		await createItem({
			position: 0,
			title: data.title,
			description: data.description,
			stage: stage,
		})
		setIsRedactorOpened(false)
	}

	const toggleRedactorOpened = () => {
		setIsRedactorOpened(!isRedactorOpened)
		reset()
	}

	return (
		<>
			<div
				data-id={stage}
				onClick={toggleRedactorOpened}
				className={cn(styles.canban__itemCreator, {
					[styles.active]: isRedactorOpened,
				})}
			>
				<MaterialIcon name={isRedactorOpened ? 'MdClear' : 'MdAdd'} />
			</div>
			{isRedactorOpened && (
				<form
					className={styles.canban__itemRedactor}
					onSubmit={handleSubmit(onSubmit)}
				>
					<CanbanItemCreatorFields register={register} formState={formState} />
					<div className={styles.buttons}>
						<Button type="submit">Save</Button>
						<Button type="button" onClick={() => setIsRedactorOpened(false)}>
							Cancel
						</Button>
					</div>
				</form>
			)}
		</>
	)
}
export default CanbanItemCreator
