import React, { useContext, memo } from 'react'

import { GlobalContext } from '../../context'

function SecondCom() {
	const { step } = useContext(GlobalContext)
	console.log('SecondCom reRender')
	return <div>SecondCom {step}</div>
}

export default memo(SecondCom)
