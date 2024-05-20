import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { genreNamesAndValues } from "@/utils/constants"
import ActorsSearch from "./ActorsSearch"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
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
import MultipleSelector, { Option } from "@/components/ui//mutliple-selector"
import { useToast } from "@/components/ui/use-toast"

const OPTIONS: Option[] = [
	{ label: "nextjs", value: "Nextjs" },
	{ label: "React", value: "react" },
	{ label: "Remix", value: "remix" },
	{ label: "Vite", value: "vite" },
	{ label: "Nuxt", value: "nuxt" },
	{ label: "Vue", value: "vue" },
	{ label: "Svelte", value: "svelte" },
	{ label: "Angular", value: "angular" },
	{ label: "Ember", value: "ember", disable: true },
	{ label: "Gatsby", value: "gatsby", disable: true },
	{ label: "Astro", value: "astro" },
]

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
	actors: z.array(optionSchema).min(1),
	genres: z.array(optionSchema).min(1),
})
type FormValues = z.infer<typeof formSchema>

const CreateArticleForm = () => {
	const initialValues: FormValues = {
		title: "",
		description: "",
		actors: [],
		genres: [],
	}

	const form = useForm<FormValues>({
		resolver: zodResolver(formSchema),
		defaultValues: initialValues,
	})
	const saveAsDraft = (formData: FormValues) => {
		console.log("Saving as draft:", formData)
		// Perform the logic to save the form data as a draft
	}
	const onSubmit = async (data: FormValues) => {
		console.log("Submitting:", data)
	}

	const [actorValue, setActorValue] = useState<Option[]>([])

	const { toast } = useToast()

	const handleGenreMaxSelected = () => {
		toast({
			title: "Maximum genres selected",
			description: "You can only select a maximum of 4 genres",
			variant: "destructive",
		})
	}

	const handleActorChange = (values: string) => {
		setActorValue([{ label: values, value: values }])
		ActorsSearch(values)
	}

	return (
		// Your JSX/HTML code goes here
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
											value={actorValue}
											onChange={handleActorChange}
											defaultOptions={OPTIONS}
											placeholder='Select actors'
											maxSelected={4}
											hidePlaceholderWhenSelected={true}
											triggerSearchOnFocus={true}
											onMaxSelected={() => {
												toast({
													title: "Maximum genres selected",
													description:
														"You can only select a maximum of 4 actors",
													variant: "destructive",
												})
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
							name='genres'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Genres</FormLabel>
									<FormControl>
										<MultipleSelector
											{...field}
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
								{" "}
								Create Article{" "}
							</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	)
}

export default CreateArticleForm
