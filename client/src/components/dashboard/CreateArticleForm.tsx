import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm, } from "react-hook-form"
import z from "zod"

type FormValues = {
	title: string
	description: string
	actors: string[]
	genres: string[]
}
const CreateArticleForm: React.FC = () => {
	// Your component logic goes here
	const formSchema = z.object({
		title: z.string(),
		description: z.string(), 
		actors: z.array(z.string()),
		genres: z.array(z.string())
	})

	const initialValues: FormValues = {
		title: "",
		description: "",
		actors: ["Actor1", "Actor2"],
		genres: ["Comedy", "Drama"]
	}
	const zodResolver = zodResolver(formSchema)

	const form = useForm<FormValues>({
		resolver: zodResolver
	})
	return (
		// Your JSX/HTML code goes here
		<div><Form>
		<FormField
		  control={...}
		  name="..."
		  render={() => (
			<FormItem>
			  <FormLabel />
			  <FormControl>
				{ /* Your form field */}
			  </FormControl>
			  <FormDescription />
			  <FormMessage />
			</FormItem>
		  )}
		/>
	  </Form></div>
	)
}

export default CreateArticleForm
