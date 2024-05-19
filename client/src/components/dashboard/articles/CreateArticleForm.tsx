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
import useFormStatus from "react-dom"

const formSchema = z.object({
	title: z
		.string({ message: "Title is required" })
		.min(2, { message: "Title is too short" }),
	description: z.string({ message: "Description is required" }),
	actors: z.array(z.string()),
	genres: z.array(z.string()),
})
type FormValues = z.infer<typeof formSchema>

const CreateArticleForm = () => {
	const initialValues: FormValues = {
		title: "",
		description: "",
		actors: ["Actor1", "Actor2"],
		genres: ["Comedy", "Drama"],
	}

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: initialValues,
	})

	const onSubmit = (data: FormValues) => {
		console.log(data)
	}
	return (
		// Your JSX/HTML code goes here
		<div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
					<FormField
						control={form.control}
						name='title'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Movie Title</FormLabel>
								<FormControl>
									<Input
										{...field}
										type='text'
										placeholder='Enter movie title'
									/>
								</FormControl>
								<FormDescription />
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='description'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input
										{...field}
										type='text'
										placeholder='Enter movie description'
									/>
								</FormControl>
								<FormDescription />
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type='submit'
						variant='default'
						className='w-full'
						disabled={form.formState.isSubmitting}
					>
						{" "}
						Create Article{" "}
					</Button>
				</form>
			</Form>
		</div>
	)
}

export default CreateArticleForm
