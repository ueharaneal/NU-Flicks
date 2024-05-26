import axios from "axios"
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
	} catch (error) {
		if (axios.isAxiosError(error)) {
			// Handle AxiosError
			console.error("Axios error:", error.response?.data)
		} else {
			// Handle unexpected error
			console.error("Unexpected error:", error)
		}
		throw error // Re-throw the error after logging it
	}
}
