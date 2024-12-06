import React from "react";
import { Button } from "./components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Category from "./components/Category";
import MostSearchedCar from "./components/MostSearchedCar";


function Home(){
	return (
		<div>
			{/*header*/}
			<Header/>
			{/*hero*/}
			<Hero/>
			{/*Category*/}
			<Category/>
			{/* Most Searched Car */}
			<MostSearchedCar/>
	
		</div>
	)
}

export default Home