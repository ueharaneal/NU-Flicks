import Categories from "@/components/Feed/Categories"
import Hero from "@/components/Feed/Hero"
function Home() {
	return (
		<div className=''>
			<div className=' flex flex-col items-center relative'>
				<Hero />
				<div className='absolute top-3/4 w-5/6 text-left flex '>
					<p>Feed </p>
					<Categories />
				</div>
				3
			</div>
		</div>
	)
}

export default Home
