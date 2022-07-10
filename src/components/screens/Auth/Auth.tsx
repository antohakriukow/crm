import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import Button from '../../ui/form-elements/Button'

import { useActions } from '../../../hooks/useActions'
import { useAuth } from '../../../hooks/useAuth'

import styles from './Auth.module.scss'

import AuthFields from './AuthFields'
import { IAuthInput } from './auth.interface'

const Auth: FC = () => {
	const { isLoading } = useAuth()

	const [type, setType] = useState<'login' | 'register'>('login')

	const {
		register: registerInput,
		handleSubmit,
		formState,
		reset,
	} = useForm<IAuthInput>({
		mode: 'onChange',
	})

	const { login, register } = useActions()

	const onSubmit: SubmitHandler<IAuthInput> = (data) => {
		if (type === 'login') login(data)
		else if (type === 'register') register(data)

		reset()
	}

	return (
		<section className={styles.auth__wrapper}>
			<form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
				<h2 className={styles.auth__title}>Auth</h2>
				<AuthFields
					formState={formState}
					register={registerInput}
					isPasswordRequired
				/>

				<div className={styles.auth__buttons}>
					<Button
						type="submit"
						onClick={() => setType('login')}
						disabled={isLoading}
					>
						Login
					</Button>

					<Button
						type="submit"
						onClick={() => setType('register')}
						disabled={isLoading}
					>
						Register
					</Button>
				</div>
			</form>
		</section>
	)
}

export default Auth
