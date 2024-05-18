import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
const formSchema = z.object({
	title: z.string(),
	description: z.string(),
	actors: z.array(z.string()),
	genres: z.array(z.string()),
})
type FormValues = z.infer<typeof formSchema>

const CreateArticleForm: React.FC = () => {
	const initialValues: FormValues = {
		title: "",
		description: "",
		actors: ["Actor1", "Actor2"],
		genres: ["Comedy", "Drama"],
	}

	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	})

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}
	return (
		// Your JSX/HTML code goes here
		<div>
			<Form {...form}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<FormField
						control={control}
						name='title'
						render={() => (
							<FormItem>
								<FormLabel />
								<FormControl>{/* Your form field */}</FormControl>
								<FormDescription />
								<FormMessage />
							</FormItem>
						)}
					/>
				</form>
			</Form>
		</div>
	)
}

export default CreateArticleForm
