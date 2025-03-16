// import NextAuth, { User, DefaultSession } from "next-auth";
// import { compare } from "bcryptjs";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { PrismaClient } from "@prisma/client";
// import prisma from "./lib/prisma";

// // Extend the session types to include additional user properties
// declare module "next-auth" {
//   interface Session {
//     user: {
//       id: string;
//       email: string;
//       name: string;
//       lastName: string;
//       role: string;
//       image: string;
//     } & DefaultSession["user"];
//   }
// }



// export const { handlers, signIn, signOut, auth } = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" }
//       },
//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) {
//           return null;
//         }

//         const user = await prisma.user.findUnique({
//           where: {
//             email: credentials.email.toString(),
//           },
//         });

//         if (!user) return null;

//         const isPasswordValid = await compare(
//           credentials.password.toString(),
//           user.password,
//         );

//         if (!isPasswordValid) return null;

//         return {
//           id: user.id.toString(),
//           email: user.email,
//           name: user.fullName,
//           lastName: user.lastName,
//           role: user.role,
//           image: user.image,
//         } as User;
//       },
//     }),
//   ],
//   pages: {
//     signIn: "/sign-in",
//     signOut: "/sign-out",
//     error: "/auth/error",
//   },
//   callbacks: {
//     async jwt({ token, user }: { token: any; user: any }) {
//       if (user) {
//         token.id = user.id;
//         token.email = user.email;
//         token.name = user.name;
//         token.lastName = user.lastName;
//         token.role = user.role;
//         token.image = user.image;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id as string;
//         session.user.email = token.email as string;
//         session.user.name = token.name as string;
//         session.user.lastName = token.lastName as string;
//         session.user.role = token.role as string;
//         session.user.image = token.image as string;
//       }
//       return session;
//     },
//   },
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });