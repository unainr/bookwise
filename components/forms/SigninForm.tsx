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
import { signinSchema } from "@/lib/formschema";
import { signInWithCredentials } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";


const SigninForm = () => {
	const router = useRouter();
  const form = useForm<z.infer<typeof signinSchema>>({
		resolver: zodResolver(signinSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	async function onSubmit(values: z.infer<typeof signinSchema>) {
		try {
			const result = await signInWithCredentials(values);
      if(result.success){
		toast.success("Signin Successfully")
        router.push("/")
      }else{
		toast.error("Sign In Failed Please Try Again");
	  }
		} catch (error:any) {
			toast.error(error.message);
			console.log(error);
		}
	}
	return (
		<>

		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className=" space-y-8 bg-gradient-to-r text-white from-[#12141D] to-[#12151F] shadow rounded-md  p-6">
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
                  placeholder="Password"
									type="password"
									{...field}
									className="w-full min-h-14 border-none text-base font-bold placeholder:font-normal text-white placeholder:text-light-100 focus-visible:ring-0 focus-visible:shadow-none bg-[#232839]"
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>


				<Button className=" mt-6 w-full min-h-14  bg-[#E7C9A5] text-dark-100 hover:bg-[#E7C9A5]/90 max-md:w-full flex items-center gap-2 text-black font-extrabold text-[1.1rem]" type="submit" disabled={form.formState.isSubmitting}>
				{form.formState.isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                </>
              ) : (
                "Sign In"
              )}
				</Button>
        <div className="text-center">

        <Link href={'sign-up'}>
Dont Have An Account? <span className="text-[#E7C9A5]">Create Account</span>
</Link>
        </div>
			</form>
		</Form>
		</>
	);
};

export default SigninForm;
