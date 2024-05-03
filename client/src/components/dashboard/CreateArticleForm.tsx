import React from "react"
import { useForm, Resolver } from "react-hook-form"
import z from "zod"

type FormValues = {
	title: string
	description: string
	actors: string
	genres: string
}
const CreateArticleForm: React.FC = () => {
	// Your component logic goes here

	return (
		// Your JSX/HTML code goes here
		<div>{/* Add your form elements here */}</div>
	)
}

export default CreateArticleForm
