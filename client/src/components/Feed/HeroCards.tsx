import { WobbleCard } from "../ui/WobbleCard"

function HeroCards() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full'>
			<WobbleCard containerClassName='col-span-1 lg:col-span-4 bg-red-900 min-h-[270px] lg:min-h-[270px] xl:min-h-[270px]'>
				<div className='max-w-sm'>
					<h2 className='max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white'>
						Signup for blazing-fast cutting-edge state of the art Gippity
						AI wrapper today!
					</h2>
					<p className='mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200'>
						With over 100,000 mothly active bot users, Gippity AI is the
						most popular AI platform for developers.
					</p>
				</div>
				<img
					src='https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg'
					width={400}
					height={400}
					alt='Avengers'
					className='absolute -right-6 md:-right-[40%] lg:right-[5%] bottom-2 object-contain rounded-2xl'
				/>
			</WobbleCard>
			<WobbleCard
				containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[250px] lg:min-h-[250px]'
				className='min-h-[270px] lg:min-h-[270px] xl:min-h-[270px]'
			></WobbleCard>
			<WobbleCard containerClassName='lg:col-span-2 min-h-[270px] lg:min-h-[270px] xl:min-h-[270px]'></WobbleCard>
		</div>
	)
}

export default HeroCards
