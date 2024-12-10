// const FormatResult=(resp)=>{
// 	let result=[];
// 	let finalResult=[];
// 	resp.forEach((item)=>{
// 			const listingId=item.carLisiting?.id;
// 			if(!result[listingId])
// 			{
// 					result[listingId]={
// 							car:item.carLisiting,
// 							images:[]
// 					}
// 			}

// 			if(item.carImages)
// 			{
// 					result[listingId].images.push(item.carImages)
// 			}
// 	})
 
// 	result.forEach((item)=>{
// 			finalResult.push({
// 					...item.car,
// 					images:item.images
// 			})
// 	})

// 	return finalResult;
// }




// export default FormatResult;


// const FormatResult = (resp) => {
//   const groupedResults = {};

//   resp.forEach((item) => {
//     const carListingId = item.carListing?.id; // Extract the carListing ID safely
//     if (!carListingId) return; // Skip if `carListing` is missing

//     if (!groupedResults[carListingId]) {
//       groupedResults[carListingId] = {
//         ...item.carListing,
//         images: [],
//       };
//     }

//     if (item.carImages?.imageUrl) {
//       groupedResults[carListingId].images.push(item.carImages.imageUrl);
//     }
//   });

//   const finalResult = Object.values(groupedResults);

//   console.log('Grouped Results:', groupedResults);
//   console.log('Final formatted result:', finalResult);

//   return finalResult;
// };

// export default FormatResult;

const FormatResult = (resp) => {
  const groupedResults = {};

  resp.forEach((item) => {
    const carListingId = item.carListing?.id;
    if (!carListingId) return;

    if (!groupedResults[carListingId]) {
      groupedResults[carListingId] = {
        ...item.carListing,
        images: []
      };
    }

    if (item.carImages?.imageUrl) {
      groupedResults[carListingId].images.push(item.carImages.imageUrl);
    }
  });

  const finalResult = Object.values(groupedResults);
  console.log("Processed data with images:", finalResult);
  return finalResult;
};
export default FormatResult;