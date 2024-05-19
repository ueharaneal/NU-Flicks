import CreateArticle from "./CreateArticle"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

function Articles() {
	return (
		<div className='flex flex-col min-w-full justify-center items-center mx-auto'>
			<Tabs defaultValue='account' className='w-[400px] mx-auto'>
				<TabsList>
					<TabsTrigger className='lg:text-3xl' value='myArticles'>
						My Articles
					</TabsTrigger>
					<TabsTrigger className='lg:text-3xl' value='createArticles'>
						Create Articles
					</TabsTrigger>
				</TabsList>
				<TabsContent value='myArticles'>
					View your articles here.
				</TabsContent>
				<TabsContent value='createArticles'>
					<CreateArticle />
				</TabsContent>
			</Tabs>
		</div>
	)
}

export default Articles
