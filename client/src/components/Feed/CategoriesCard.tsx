import { DirectionAwareHover } from "../ui/direction-aware-hover"

interface CategoriesCard {
	name: string
	imageUrl: string
}
function CategoriesCard({ name, imageUrl }: CategoriesCard) {
	return (
		<div className='h-[40rem] relative  flex items-center justify-center'>
			<DirectionAwareHover imageUrl={imageUrl}>
				<p className='font-bold text-xl'>{name.toUpperCase()}</p>
				<p className='font-normal text-sm'>$1299 / night</p>
			</DirectionAwareHover>
		</div>
	)
}

export default CategoriesCard
