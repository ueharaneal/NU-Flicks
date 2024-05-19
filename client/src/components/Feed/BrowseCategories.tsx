import { Link } from "react-router-dom"
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
			<div className='grid grid-cols-2 lg:grid-cols-7 gap-x-4 -mt-8 lg:mt-1'>
				{movieGenres.map((genre: GenreProps, index: number) => (
					<Link
						key={index}
						className=''
						to={`/categories/${genre.name.toLowerCase()}`}
					>
						<CategoriesCard
							key={index}
							name={genre.name}
							imageUrl={genre.imgUrl}
						/>
					</Link>
				))}
			</div>
		</div>
	)
}

export default BrowseCategories
