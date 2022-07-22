import { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'

import Field from '../../../../ui/form-elements/Field'

import { validHex } from '../../../../../shared/regex'

import styles from './CanbanItemCreator.module.scss'

interface ICanbanItemCreatorFields {
	register: UseFormRegister<any>
	formState: FormState<any>
}

const CanbanItemCreatorFields: FC<ICanbanItemCreatorFields> = ({
	register,
	formState: { errors },
}) => {
	return (
		<>
			<Field
				mode="dark"
				{...register('title', {
					required: 'Name is required',
					minLength: {
						value: 2,
						message: 'Min title length is 2 symbols',
					},
				})}
				placeholder="Title"
				error={errors.title}
			/>

			<Field
				mode="dark"
				{...register('description', {
					minLength: {
						value: 2,
						message: 'Min length is 2 symbols',
					},
				})}
				placeholder="Description"
				error={errors.description}
			/>
		</>
	)
}
export default CanbanItemCreatorFields
