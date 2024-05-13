import CategoriesCard from "./CategoriesCard"
import { movieGenres } from "@/utils/constants"
interface GenreProps {
	name: string
	imgUrl: string
}

function BrowseCategories() {
	return (
		<div className='flex flex-col items-start justify-start'>
			<h2 className='text-4xl text-left uppercase font-bold'>
				Browse by categories
			</h2>
			<div className='grid grid-cols-5 gap-x-4 mt-10 '>
				{movieGenres.map((genre: GenreProps, index: number) => (
					<div key={index} className='-my-24'>
						<CategoriesCard
							key={index}
							name={genre.name}
							imageUrl={genre.imgUrl}
						/>
					</div>
				))}
			</div>
		</div>
	)
}

export default BrowseCategories
