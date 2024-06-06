import { createArticlePost } from "@/api/articles"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { genreNamesAndValues } from "@/utils/constants"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
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
import MultipleSelector, { Option } from "@/components/ui/mutliple-selector"
import { useToast } from "@/components/ui/use-toast"
import { useMutation } from "@tanstack/react-query"

const optionSchema = z.object({
	label: z.string(),
	value: z.string(),
	disable: z.boolean().optional(),
})

const formSchema = z.object({
	title: z
		.string({ message: "Title is required" })
		.min(2, { message: "Title is too short" }),
	description: z.string({ message: "Description is required" }),
	actors: z
		.array(optionSchema)
		.min(1, { message: "At least one actor is required" }),
	genres: z.array(optionSchema).min(1),
	rating: z.number().min(0).max(4),
})
export type CreateArticleFormValues = z.infer<typeof formSchema>

export default function CreateArticleForm() {
	const { toast } = useToast()

	//const { asyncMuta } = useMutation(createArticlePost(data))

	const initialValues: CreateArticleFormValues = {
		title: "",
		description: "",
		actors: [],
		genres: [],
		rating: 0.0,
	}

	const form = useForm<CreateArticleFormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: initialValues,
	})

	const handleGenreMaxSelected = () => {
		toast({
			title: "Maximum genres selected",
			description: "You can only select a maximum of 4 genres",
			variant: "destructive",
		})
	}

	const saveAsDraft = (formData: CreateArticleFormValues) => {
		console.log("Saving as draft:", formData)
		// Perform the logic to save the form data as a draft
	}

	const onSubmit = async (data: CreateArticleFormValues) => {
		console.log("Submitting:", data)
		const response = await createArticlePost(data)
		console.log(response)
	}

	const handleActorChange = (values: Option[]) => {
		const uppercasedValues = values.map(value => ({
			label: value.label.toUpperCase(),
			value: value.value,
		}))
		form.setValue("actors", uppercasedValues)
	}

	const handleGenreChange = (values: Option[]) => {
		form.setValue("genres", values)
	}

	return (
		<Card>
			<CardHeader>
				<h2 className='text-2xl font-semibold'>Create a Movie Article</h2>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className='space-y-5 '
					>
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

						<FormField
							control={form.control}
							name='actors'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Actors</FormLabel>
									<FormControl>
										<MultipleSelector
											{...field}
											onChange={handleActorChange}
											placeholder='Enter Actor Name (ex: Tom Holland)'
											maxSelected={4}
											hidePlaceholderWhenSelected={true}
											triggerSearchOnFocus={true}
											creatable={true}
											onMaxSelected={() => {
												toast({
													title: "Maximum actors selected",
													description:
														"You can only select a maximum of 4 actors",
													variant: "destructive",
												})
											}}
											emptyIndicator={
												<p className='text-center text-lg leading-10 text-gray-600 dark:text-gray-400'>
													Press enter to add a new actor
												</p>
											}
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='genres'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Genres</FormLabel>
									<FormControl>
										<MultipleSelector
											{...field}
											onChange={handleGenreChange}
											defaultOptions={genreNamesAndValues}
											placeholder='Select genres'
											maxSelected={4}
											hidePlaceholderWhenSelected={true}
											triggerSearchOnFocus={true}
											onMaxSelected={() => {
												handleGenreMaxSelected()
											}}
											emptyIndicator={
												<p className='text-center text-lg leading-10 text-gray-600 dark:text-gray-400'>
													no results found.
												</p>
											}
										/>
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='rating'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Rating</FormLabel>
									<FormControl>
										<Input
											{...field}
											type='number'
											placeholder='Enter rating'
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<div className='flex flex-row gap-x-5 justify-center'>
							<Button
								type='button'
								variant='secondary'
								className='w-[40%] rounded-md'
								disabled={form.formState.isSubmitting}
								onClick={() => saveAsDraft(form.getValues())}
							>
								Save Draft
							</Button>

							<Button
								type='submit'
								variant='default'
								className='w-[40%] rounded-md'
								disabled={form.formState.isSubmitting}
							>
								Create Article
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}
