import React from 'react'
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';

function Inbox() {
	return (
		<div>
			<div style={{ width:'100vw', height:'100vh' }}>
				<SendbirdApp
					appId={import.meta.env.VITE_SENDBIRD_APP_ID}
					userId={'admin'}
					// accessToken={'ACCESS_TOKEN'}
				/>
   		 </div>
		</div>
	)
}

export default Inbox