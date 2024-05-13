import BrowseCategories from "@/components/Feed/BrowseCategories"
import Hero from "@/components/Feed/Hero"
function Home() {
	return (
		<div className=''>
			<div className=' flex flex-col items-center relative'>
				<div className='mt-16'>
					<Hero />
				</div>
				<div className='absolute top-3/4 w-5/6 text-left flex '>
					<BrowseCategories />
				</div>
			</div>
		</div>
	)
}

export default Home
