import React, { useEffect, useState } from 'react'
import { App as SendbirdApp } from '@sendbird/uikit-react';
import '@sendbird/uikit-react/dist/index.css';
import SendbirdProvider from '@sendbird/uikit-react/SendbirdProvider';
import { useUser } from '@clerk/clerk-react';
import {GroupChannelList} from '@sendbird/uikit-react/GroupChannelList';
import {GroupChannel} from '@sendbird/uikit-react/GroupChannel';

function Inbox() {
	const {user}=useUser();
	const [userId, setUserId]=useState();
	const [channelUrl, setChannelUrl]=useState();

	useEffect(()=>{
    if (user){
			const id=(user.primaryEmailAddress?.emailAddress).split('@')[0];
			setUserId(userId);
		}
  }, [user])

	return (
		<div>
			<div style={{ width:'100%', height:'500px' }}>
				<SendbirdProvider appId={import.meta.env.VITE_SENDBIRD_APP_ID} 
				userId={userId} 
				nickname={user?.fullName} 
				profileUrl={user?.imageUrl}
				allowProfileEdit={true} 
				>		
				<div className='grid grid-cols-1 gap-5 md:grid-cols-3 h-full'>
					{/*channel list*/}
					<div className='p-5 border shadow-lg'>
						<GroupChannelList
						onChannelSelect={(channel)=>{
							setChannelUrl(channel?.url)
						}}
						channelListQueryParams={
							{includeEmpty:true}
						}
						/>
					</div>

					{/*channel/ message area*/}
					<div className='md:col-span-2 shadow-lg'>
						<GroupChannel channelUrl={channelUrl}/>
					</div>

				</div>
					


					</SendbirdProvider>
   		 </div>
		</div>
	)
}

export default Inbox