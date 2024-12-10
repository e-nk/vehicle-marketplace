import { Button } from '@/components/ui/button'
import Service from '@/Shared/Service'
import { useUser } from '@clerk/clerk-react'
import React from 'react'

function OwnersDetail({carDetail}) {

	const {user}=useUser();
	const OnMessageOwnerButtonClick= async()=>{
		//create current user id
		try{
			const userId=user.primaryEmailAddress?.emailAddress.split('@')[0];
			await Service.CreateSendBirdUser(userId, user?.fullName,user?.imageUrl)
			.then(resp=>{
				console.log(resp);
			})
		}catch(e){}

		//owner user id
		try{
			const ownerUserId=carDetail?.createdBy.split('@')[0];
      await Service.CreateSendBirdUser(ownerUserId, carDetail?.createdBy,carDetail?.userImageUrl)
      .then(resp=>{
        console.log(resp);
      })
		}catch(e){}


		//chanel id


	}
	return (
		<div className='p-10 border rounded-xl shadow-md mt-7'>
			<h2 className='font-medium text-2xl mb-3'>Owner details</h2>
			<img src={carDetail?.userImageUrl} className='w-[70px] h-[70px] rounded-full'/>
			<h2 className='mt-2 font-bold text-xl'>
				{carDetail?.userName}
			</h2>
			<h2 className='mt-2 text-gray-500'>{carDetail?.createdBy}</h2>

			<Button className='w-full mt-6'
				onClick={OnMessageOwnerButtonClick}
			>Message Owner</Button>

		</div>
	)
}

export default OwnersDetail