"use server";

import { hash } from "bcryptjs";
import prisma from "../prisma";
import { signIn, signOut } from "@/auth";

interface AuthCredentials {
	fullname: string;
	lastname: string;
	email: string;
	password: string;
	image: string;
}

export const signInWithCredentials = async (
	params: Pick<AuthCredentials, "email" | "password">
) => {
	const { email, password } = params;
	try {
		const result = await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		if (result?.error) {
			return { success: false, error: "Invalid email or password" };
		}
		return { success: true };
	} catch (error) {
		console.log(error, "SignIn error");
		return { success: false, error: "sign in error" };
	}
};

export const signUp = async (params: AuthCredentials) => {
	const { fullname, lastname, email, password, image } = params;
	const existingUser = await prisma.user.findUnique({
		where: {
			email,
		},
	});
	if (existingUser) {
		return { success: false, error: "User Already exists" };
	}
	const hashedPassword = await hash(password, 10);
	try {
		const user = await prisma.user.create({
			data: {
				fullName: fullname,
				lastName: lastname,
				email,
				password: hashedPassword,
				image,
			},
		});
		await signInWithCredentials({email,password})
		return { success: true, user };
	} catch (error) {
		console.log(error, "SignUp error");
		return { success: false, error: "Error signing up" };
	}
};


export const signOutAction  = async(formData: FormData) =>{

	await signOut();

}


export async function getUsers() {
    try {
        const user = await prisma.user.findMany({
			orderBy: {
				createdAt: 'desc'
			  }
        });

        if (!user) return null;
        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
}