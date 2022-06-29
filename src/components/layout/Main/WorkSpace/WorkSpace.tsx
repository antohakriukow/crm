import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import styles from './WorkSpace.module.scss'

import Calendar from '../../../screens/Calendar/Calendar'
import Contacts from '../../../screens/Contacts/Contacts'
import Crm from '../../../screens/Crm/Crm'
import Email from '../../../screens/Email/Email'

const WorkSpace: FC = () => {
	return (
		<Routes>
			<Route path="/crm" element={<Crm />} />
			<Route path="/calendar" element={<Calendar />} />
			<Route path="/contacts" element={<Contacts />} />
			<Route path="/email" element={<Email />} />
		</Routes>
	)
}
export default WorkSpace
