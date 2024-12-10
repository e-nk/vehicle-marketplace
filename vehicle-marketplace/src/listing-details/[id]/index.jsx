import Header from '@/components/Header'
import React, { useEffect, useState } from 'react'
import DetailHeader from './components/DetailHeader'
import { useParams } from 'react-router-dom'
import { db } from './../../../configs';
import { CarListing } from './../../../configs/schema';
import { eq } from 'drizzle-orm';
import FormatResult from '@/Shared/Service';
import ImageGallery from './components/ImageGallery';
import Description from './components/Description';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Specification from './components/Specification';
import OwnersDetail from './components/OwnersDetail';
import Footer from '@/components/Footer';

function ListingDetail() {
	const {id}=useParams();
	const [carDetail,setCarDetail]=useState();


	useEffect(()=>{
    GetCarDetail();
  }, []);



	const GetCarDetail= async() => {
		const result =await db.select().from(CarListing)
		.innerJoin(CarImages,eq(CarListing.id,CarImages.carListingId))
		.where(eq(CarListing.id,id));

		const resp = FormatResult(result);
		setCarDetail(resp[0]);
	}

	return (

		<div>
			<Header/>

			<div className='p-10 md:px-20'>
				{/* <Header detail component*/}
				<DetailHeader carDetail={carDetail}/>


				<div className='grid grid-cols-1 md:grid-cols-3 w-full mt-10 gap-5'>
					<div className='md:col-span-2'>
						{/* image gallery */}
						<ImageGallery carDetail={carDetail}/>
						{/* description */}
						<Description carDetail={carDetail}/>
						{/* features */}
						<Features carDetail={carDetail?.features}/>

					</div>
					<div className=''>
						{/* pricing right */}
						<Pricing carDetail={carDetail}/>

						{/* car specification */}
						<Specification carDetail={carDetail}/>
						{/* car specification */}
						<OwnersDetail carDetail={carDetail}/>

					</div>
				</div>

			</div>
			<Footer/>

		</div>
	)
}

export default ListingDetail