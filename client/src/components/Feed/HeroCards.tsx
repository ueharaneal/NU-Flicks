import { WobbleCard } from "../ui/WobbleCard"

function HeroCards() {
	return (
		<div className='grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full'>
			<WobbleCard
				containerClassName='col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[250px] lg:min-h-[250px] '
				className='min-h-[270px] lg:min-h-[270px] xl:min-h-[270px]'
			>
				<div className='max-w-sm'>
					<h2 className='max-w-sm md:max-w-lg  text-left text-balance text-base lg:text-xl font-semibold tracking-[-0.015em] text-white'>
						Stay up to date with the Latest Releases
					</h2>
					<p className='mt-4 max-w-[15rem] text-left  text-sm text-neutral-200'>
						Stay up-to-date with the newest releases in the film industry.
						Explore captivating descriptions and ratings for the latest
						movies, all in one place. Whether you're a cinephile or casual
						moviegoer, find your next cinematic adventure here.
					</p>
				</div>
			</WobbleCard>
			<WobbleCard containerClassName='lg:col-span-2 min-h-[270px] lg:min-h-[270px] xl:min-h-[270px] '>
				<div className='max-w-sm'>
					<h2 className='max-w-sm md:max-w-lg  text-left text-balance text-base lg:text-xl font-semibold tracking-[-0.015em] text-white'>
						Genre Spotlight
					</h2>
					<p className='mt-4 max-w-[15rem] text-left  text-sm text-neutral-200'>
						Explore your favorite movie genres like never before. From
						heart-pounding action to side-splitting comedy, delve into
						curated lists of top-rated movies tailored to your tastes.
						Find your next cinematic obsession with ease.
					</p>
				</div>
			</WobbleCard>
			<WobbleCard containerClassName='col-span-1 lg:col-span-4 bg-red-900 min-h-[270px] lg:min-h-[270px] xl:min-h-[270px] '>
				<div className='max-w-sm'>
					<h2 className='max-w-sm md:max-w-xl  text-left text-balance text-base lg:text-xl font-semibold tracking-[-0.015em] text-white'>
						Signup To Create Your Own Article
					</h2>
					<p className='mt-4 max-w-[35rem] text-left  text-sm text-neutral-200'>
						Unleash your creativity and share your unique perspective on
						the world of cinema. With our "Create Your Own Article"
						feature, users have the opportunity to become film critics,
						storytellers, and industry pundits. Simply draft your article,
						add images and multimedia content, and publish it for the
						world to see. Join our community of passionate movie lovers
						and contribute your voice to the vibrant tapestry of film
						culture.
					</p>
				</div>
				<img
					src='https://c4.wallpaperflare.com/wallpaper/296/400/37/movie-avengers-infinity-war-black-panther-movie-black-widow-wallpaper-preview.jpg'
					width={300}
					height={300}
					alt='Avengers'
					className='absolute -right-7  lg:-right-6 bottom-12 object-contain rounded-2xl'
				/>
			</WobbleCard>
		</div>
	)
}

export default HeroCards
