import { FC } from 'react'

import { useAuth } from '../../hooks/useAuth'

import styles from './App.module.scss'

import Header from '../layout/Header/Header'
import Main from '../layout/Main/Main'
import Auth from '../screens/Auth/Auth'

const App: FC = () => {
	const { user } = useAuth()
	return (
		<div className={styles.app}>
			<Header />
			{user ? <Main /> : <Auth />}
		</div>
	)
}
export default App
