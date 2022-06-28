import { FC, useEffect, useState } from 'react'

import styles from './Clock.module.scss'

const Clock: FC = () => {
	const [date, setDate] = useState(new Date())

	function refreshClock() {
		setDate(new Date())
	}
	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000)
		return function cleanup() {
			clearInterval(timerId)
		}
	}, [])

	return (
		<span className={styles.clock}>
			{date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
		</span>
	)
}
export default Clock
