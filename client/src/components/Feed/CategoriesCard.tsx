import { DirectionAwareHover } from "../ui/direction-aware-hover"

interface CategoriesCard {
	name: string
	imageUrl: string
}
function CategoriesCard({ name, imageUrl }: CategoriesCard) {
	return (
		<div className=' my-10 relative  flex items-center justify-center'>
			<DirectionAwareHover
				imageUrl={imageUrl}
				className='shadow-xl max-h-72'
			>
				<p className='font-bold text-xl'>{name.toUpperCase()}</p>
				<p className='font-normal text-sm'>$1299 / night</p>
			</DirectionAwareHover>
		</div>
	)
}

export default CategoriesCard
