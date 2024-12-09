import Header from '@/components/Header'
import React from 'react'
import DetailHeader from './components/DetailHeader'

function ListingDetail() {
	return (
		<div>
			<Header/>

			<div className='p-10 md:px-20'>
				{/* <Header detail component*/}
				<DetailHeader/>

			</div>

		</div>
	)
}

export default ListingDetail