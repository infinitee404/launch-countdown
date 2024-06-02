import React, { useEffect, useState } from 'react'

const launchDate = {
	month: '7',
	day: '7',
	hour: '12',
	minute: '00',
	second: '00',
}

const Countdown = () => {
	const [daysLeft, setDaysLeft] = useState(0)
	const [hoursLeft, setHoursLeft] = useState(0)
	const [minutesLeft, setMinutesLeft] = useState(0)
	const [secondsLeft, setSecondsLeft] = useState(0)

	useEffect(() => {
		const now = new Date()
		const launch = new Date(
			now.getFullYear(),
			parseInt(launchDate.month, 10) - 1,
			parseInt(launchDate.day, 10),
			parseInt(launchDate.hour, 10),
			parseInt(launchDate.minute, 10),
			parseInt(launchDate.second, 10)
		)

		if (now > launch) {
			setDaysLeft(0)
            setHoursLeft(0)
            setMinutesLeft(0)
            setSecondsLeft(0)
		}

		const updateCountdown = () => {
			const now = new Date()
			const timeDifference = launch - now

			if (timeDifference > 0) {
				const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
				const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
				const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
				const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

				setDaysLeft(days.toString().padStart(2, '0'))
				setHoursLeft(hours.toString().padStart(2, '0'))
				setMinutesLeft(minutes.toString().padStart(2, '0'))
				setSecondsLeft(seconds.toString().padStart(2, '0'))
			}
		}
		updateCountdown()
		const intervalId = setInterval(updateCountdown, 1000)

		return () => clearInterval(intervalId)
	}, [])

	return (
		<div className='countdown'>
			<div>
				<div className='card card-days'>
					<span className='count-value'>{daysLeft}</span>
					<div className='line' />
				</div>
				<div className='card-label'>Days</div>
			</div>
			<div>
				<div className='card card-hours'>
					<span className='count-value'>{hoursLeft}</span>
					<div className='line' />
				</div>
				<div className='card-label'>Hours</div>
			</div>
			<div>
				<div className='card card-minutes'>
					<span className='count-value'>{minutesLeft}</span>
					<div className='line' />
				</div>
				<div className='card-label'>Minutes</div>
			</div>
			<div>
				<div className='card card-seconds'>
					<span className='count-value'>{secondsLeft}</span>
					<div className='line' />
				</div>
				<div className='card-label'>Seconds</div>
			</div>
		</div>
	)
}

export default Countdown
