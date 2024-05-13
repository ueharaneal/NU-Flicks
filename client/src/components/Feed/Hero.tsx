import React from "react"
import HeroCards from "./HeroCards"
const Hero: React.FC = () => {
	return (
		<div className='flex flex-row w-5/6  justify-around items-center text-center'>
			<div className='text-lg md:text-2xl gap-y-3 flex flex-col'>
				{" "}
				<h1 className='text-primary font-bold text-2xl md:text-7xl uppercase'>
					{" "}
					The best movie website!
				</h1>{" "}
				<p className=''>Find or fight with your haters...</p>{" "}
			</div>
			<div>
				<HeroCards />
			</div>
		</div>
	)
}

export default Hero
