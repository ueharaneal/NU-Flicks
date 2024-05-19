import CreateArticleForm from "./CreateArticleForm"

function CreateArticle() {
	return (
		<div className='grid grid-cols-2 w-[2000px] items-center justify-around gap-x-16 mt-6'>
			<div className=' col-span-1'>
				<CreateArticleForm />
			</div>
			<div className='col-span-1'>This is the movie article Preview</div>
		</div>
	)
}

export default CreateArticle
