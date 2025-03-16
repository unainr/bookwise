"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signupSchema } from "@/lib/formschema";
import { ImageUploadDemo } from "./FileUpload";
import { signUp } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const SignupForm = () => {
	const router = useRouter();
	const form = useForm<z.infer<typeof signupSchema>>({
		resolver: zodResolver(signupSchema),
		defaultValues: {
			fullname: "",
			lastname: "",
			email: "",
			password: "",
			image: "",
		},
	});
	async function onSubmit(values: z.infer<typeof signupSchema>) {
		try {
			const signup = await signUp(values);
			if (signup.success) {
				router.push("/");
				toast.success("Signup Successfully");
				form.reset();
			}
		} catch (error:any) {
			toast.error(error.message);
			console.log(error);
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className=" space-y-8 bg-gradient-to-r text-white from-[#12141D] to-[#12151F] shadow rounded-md  p-6">
				<FormField
					control={form.control}
					name="fullname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Full Name"
									{...field}
									className="w-full min-h-14 border-none text-base font-bold placeholder:font-normal text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none bg-[#232839]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="lastname"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Last Name</FormLabel>
							<FormControl>
								<Input
									placeholder="Last Name"
									{...field}
									className="w-full min-h-14 border-none text-base font-bold placeholder:font-normal text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none bg-[#232839]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input
									placeholder="Email"
									{...field}
									className="w-full min-h-14 border-none text-base font-bold placeholder:font-normal text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none bg-[#232839]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input
									type="password"
									placeholder="Password"
									{...field}
									className="w-full min-h-14 border-none text-base font-bold placeholder:font-normal text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none bg-[#232839]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{/* image upload field */}
				<FormField
					control={form.control}
					name="image"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Profile Picture</FormLabel>
							<FormControl>
								<ImageUploadDemo
									value={field.value}
									onChange={(url) => form.setValue("image", url)}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<Button
					className="mt-6 min-h-14 w-full bg-[#E7C9A5] text-dark-100 hover:bg-[#E7C9A5]/90 max-md:w-full flex items-center gap-2 text-black  font-extrabold text-[1.1rem] font-sans"
					type="submit" disabled={form.formState.isSubmitting}>
					{form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Creating...
                </>
              ) : (
                "Sign Up"
              )}
				</Button>
				<div className="text-center">
					<Link href={"sign-in"}>
						Already have an account?{" "}
						<span className="text-[#E7C9A5] font-extrabold">Sign in</span>
					</Link>
				</div>
			</form>
		</Form>
	);
};

export default SignupForm;
