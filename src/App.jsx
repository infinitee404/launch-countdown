import React from 'react'
import Countdown from './components/Countdown'
import './styles.css'

const App = () => {
	return (
        <div className='container'>
			<h1>Exam coming soon</h1>
			<Countdown />
            <footer>
            </footer>
		</div>
	)
}

export default App
