import React from "react"
import HeroCards from "./HeroCards"
const Hero: React.FC = () => {
	return (
		<div className='flex flex-row w-5/6  justify-center items-center text-center mt-16 '>
			<div className='text-lg md:text-2xl gap-y-3 flex flex-col'>
				{" "}
				<h1 className='text-primary font-bold text-2xl md:text-6xl uppercase'>
					{" "}
					The best movie review website!
				</h1>{" "}
				<p className=''>Find or fight with your haters...</p>{" "}
				<p className='text-sm text-muted-foreground'>By Neal Uehara</p>{" "}
			</div>
			<div>
				<HeroCards />
			</div>
		</div>
	)
}

export default Hero
