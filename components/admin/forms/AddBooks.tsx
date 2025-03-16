"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { addBooksSchema } from "@/lib/formschema";
import { ImageUploadDemo } from "@/components/forms/FileUpload";
import ColorPicker from "./ColorPicker";
import { createBook } from "@/lib/actions/createbook.action";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Textarea } from "@/components/ui/textarea"


const CreateBooks = () => {
	const form = useForm<z.infer<typeof addBooksSchema>>({
		resolver: zodResolver(addBooksSchema),
		defaultValues: {
			title: "",
			author: "",
			genra: "",
			totalbooks: 1,
			bookimage: "",
			bookcolor: "",
			booksummary: "",
		},
	});

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof addBooksSchema>) {
	try {
	const response = await createBook(values);
		if (response.success) {
			toast.success("Book Create Successfully");
			form.reset();
		} 
	} catch (error:any) {
		toast.error(error.message);
		console.log(error);
		
	}
	}
	return (
		<>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>title</FormLabel>
								<FormControl>
									<Input placeholder="Book Title" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="author"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Author</FormLabel>
								<FormControl>
									<Input placeholder="Author" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="genra"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Genra</FormLabel>
								<FormControl>
									<Input placeholder="Genra" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="totalbooks"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Total books</FormLabel>
								<FormControl>
									<Input placeholder="Total Books" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* image upload field */}
					<FormField
						control={form.control}
						name="bookimage"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Book Image</FormLabel>
								<FormControl>
									<ImageUploadDemo
										value={field.value}
										onChange={(url) => form.setValue("bookimage", url)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="bookcolor"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Book Color</FormLabel>
								<FormControl>
									<ColorPicker {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="booksummary"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Book Summary</FormLabel>
								<FormControl>
									{/* <Input placeholder="Book summary" {...field} /> */}
									<Textarea placeholder="Book summary" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit"  disabled={form.formState.isSubmitting}>
					{form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
                </>
              ) : (
                "Submit"
              )}
						</Button>
				</form>
			</Form>
		</>
	);
};

export default CreateBooks;
