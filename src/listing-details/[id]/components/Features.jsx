import { Value } from '@radix-ui/react-select';
import React from 'react'
import { FaCheck } from "react-icons/fa6";


function Features({features={}}) {

	console.log(features)


	return (
		<div className='mt-6'>
			<div className='p-10 bg-white rounded-xl border shadow-md'>
				<h2 className='font-medium text-2xl'>Features</h2>
				<div className='grid grid-cols-2 md:grid-cols-3 mt-5 lg:grid-cols-4 gap-7'>
					{Object.entries(features).map(([features, value])=>(
						<div className='flex gap-2 items-center'>
							<FaCheck className='text-lg p-1 rounded-full bg-blue-100 text-primary'/>
							<h2>{features}</h2>
						</div>
					))}
				</div>
				{/* {[features]?.map((item,index)=>(
					<div key={index} >
            <FaCheck className='text-lg bg-blue-100 text-primary'/>

          </div>
				))} */}

			</div>
		</div>
	)
}

export default Features