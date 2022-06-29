import { FC } from 'react'
import { useSelector } from 'react-redux'

import { TypeRootState } from '../../store/store'

import Header from '../layout/Header/Header'
import Main from '../layout/Main/Main'
import Auth from '../screens/Auth/Auth'

const App: FC = () => {
	const { isUser } = useSelector((state: TypeRootState) => state.user)
	return (
		<>
			<Header />
			{isUser ? <Main /> : <Auth />}
		</>
	)
}
export default App
