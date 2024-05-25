import axios, { AxiosError } from "axios"
import { CreateArticleFormValues } from "@/components/dashboard/articles/CreateArticleForm"
import { getTokenCookie } from "../utils/tools"

export const createArticlePost = async (data: CreateArticleFormValues) => {
	try {
		const token = getTokenCookie()
		console.log(token)
		if (!token) throw new Error("No token found")
		const request = await axios.post("/api/articles", data, {
			headers: { Authorization: `Bearer ${token}` },
		})
		return request.data
	} catch (error: AxiosError) {
		console.error(error.response.data.errors)
		throw error
	}
}
