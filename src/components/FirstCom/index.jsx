import React, { memo } from 'react'

function FirstCom() {
	// const { state } = useContext(GlobalContext)
	console.log('FirstCom reRender --- 未依赖 context state')
	return <div>FirstCom</div>
}

export default memo(FirstCom)
