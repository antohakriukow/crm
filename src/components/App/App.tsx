import { FC } from 'react'
import { useSelector } from 'react-redux'

import { TypeRootState } from '../../store/store'

import styles from './App.module.scss'

import Header from '../layout/Header/Header'
import Main from '../layout/Main/Main'
import Auth from '../screens/Auth/Auth'

const App: FC = () => {
	const { isUser } = useSelector((state: TypeRootState) => state.user)
	return (
		<div className={styles.app}>
			<Header />
			{isUser ? <Main /> : <Auth />}
		</div>
	)
}
export default App
