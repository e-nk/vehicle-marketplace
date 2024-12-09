import Search from '@/components/Search'
import Header from './../../components/Header'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs';
import { CarImages, CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import FormatResult from '@/Shared/Service';
import CarItem from '@/components/CarItem';

function SearchByCategory() {


	const {category}=useParams();
	const [carList,setCarList]=useState([]);
	console.log(category);

	useEffect(()=>{
    GetCarList()
  },[])

	const GetCarList= async()=>{
		const result = await db.select().from(CarListing)
		.innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
		.where(eq(CarListing.category,category))

		const resp=FormatResult(result);
		setCarList(resp);
		console.log(resp);

	}

	
	return (
		<div>
			<Header/>

			<div className='p-16 bg-black flex justify-center'>
				<Search/>
			</div>
			<div className='p-10 md:px-20'>
				<h2 className='font-bold text-4xl p-10 md:px-20'>{category}</h2>

				{/*list cars*/}
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-7'>
					{carList.map((item,index) => (
						<div key={index}>
							<CarItem car={item}/>

						</div>
					))}
				</div>
			</div>

		</div>
	)
}

export default SearchByCategory