import React, { useReducer } from 'react'
import { GlobalContext, reducer, initState } from './context'
import FirstCom from './components/FirstCom'
import SecondCom from './components/SecondCom'

function App() {
	const [state, dispatch] = useReducer(reducer, initState)

	return (
		<GlobalContext.Provider value={{ dispatch, state, step: state.step }}>
			<div className='App'>
				{state.count}
				<p>step is : {state.step}</p>
				<p>number is : {state.number}</p>
				<p>count is : {state.count}</p>
				<hr />
				<div>
					<button
						onClick={() => {
							dispatch({ type: 'stepInc' })
						}}>
						step ++
					</button>
					<button
						onClick={() => {
							dispatch({ type: 'numberInc' })
						}}>
						number ++
					</button>
					<button
						onClick={() => {
							dispatch({ type: 'count' })
						}}>
						number + step
					</button>
				</div>
				<FirstCom />
				<SecondCom />
			</div>
		</GlobalContext.Provider>
	)
}

export default App
