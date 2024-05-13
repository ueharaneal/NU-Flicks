import BrowseCategories from "@/components/Feed/BrowseCategories"
import Hero from "@/components/Feed/Hero"
function Home() {
	return (
		<div className=''>
			<div className=' flex flex-col items-center justify-center'>
				<div className='flex items-center justify-center'>
					<Hero />
				</div>
				<div className='mt-5 w-5/6'>
					<BrowseCategories />
				</div>
			</div>
		</div>
	)
}

export default Home
