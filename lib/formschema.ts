import { z } from "zod";

export const signupSchema = z.object({
	fullname: z.string().min(2, {
		message: "Fullname must be at least 2 characters.",
	}),
	lastname: z.string().min(2, {
		message: "Lastname must be at least 2 characters.",
	}),
	email: z.string().email({
		message: "Email must be a valid email address.",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters.",
	}),
	image: z.string().url({
		message: "Image must be a valid URL.",
	}),
});

export const signinSchema = z.object({
	email: z.string().email({
		message: "Email must be a valid email address.",
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters.",
	}),
});

export const addBooksSchema = z.object({
	title: z
		.string()
		.min(2, {
			message: "Title must be at least 2 characters.",
		})
		.max(100),
	author: z
		.string()
		.min(2, {
			message: "Author must be at least 2 characters.",
		})
		.max(100),
	genra: z
		.string()
		.min(2, {
			message: "Genra must be at least 2 characters.",
		})
		.max(50),

	totalbooks: z.coerce.number().int().positive().lte(10000),

	bookimage: z.string().url({
		message: "Book image must be a valid URL.",
	}),
	bookcolor: z
		.string()
		,

	booksummary: z.string().trim().min(10),
});

export interface SearchBookResult {
	id: number;
	title: string;
	author: string;
	genra: string;
	bookImage: string;
	bookColor: string;
	bookSummary: string;
  }