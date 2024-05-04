import { useEffect, useState } from "react"
import axios from "axios"
import { getTokenCookie } from "@/utils/tools"
import CategoriesCard from "./CategoriesCard"
import { HoverEffect } from "../ui/HoverEffect"
interface Categories {
	name: string
	imageUrl: string
	date: Date
	id: string
}
function Categories() {
	const [data, setData] = useState<Categories[] | null>(null)
	useEffect(() => {
		axios
			.get<Categories[]>("/api/articles/categories", {
				headers: {
					Authorization: getTokenCookie(),
				},
			})
			.then(response => {
				setData(response.data)
				console.log(data)
			})
			.catch(error => {
				console.error("Error Fetching Data", error)
			})
	}, [])
	console.log(data)
	const content = data?.map(article => {
		return (
			<CategoriesCard
				key={article.id}
				name={article.name}
				imageUrl={article.imageUrl}
			></CategoriesCard>
		)
	})
	return (
		<div className=''>
			<h1 className='text-2xl font-bold '>Browse by Categories</h1>
			<HoverEffect
				items={
					data
						? data.map(article => {
								return {
									title: article.name,
									description: "Description",
									link: `/categories/${article.id}`,
								}
						  })
						: []
				}
			></HoverEffect>
			<div className='mt-[-70px]'>{content}</div>
		</div>
	)
}

export default Categories
