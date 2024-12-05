import React from "react";
import { Button } from "./components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import Header from "./components/Header";
import Hero from "./components/Hero";


function Home(){
	return (
		<div>
			{/*header*/}
			<Header/>
			{/*hero*/}
			<Hero/>
	
		</div>
	)
}

export default Home