import axios from "axios"
import { CreateArticleFormValues } from "@/components/dashboard/articles/CreateArticleForm"

export const createArtitcle = async (data: CreateArticleFormValues) => {
	try {
		const request = await axios.post("/api/article", data)
		return request.data
	} catch (error) {
		console.error(error)
		throw error
	}
}
