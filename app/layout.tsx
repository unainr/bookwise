import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Toaster } from "@/components/ui/sonner";
import NextTopLoader from "nextjs-toploader";

const ibmPlexSans = localFont({
	src: [
		{ path: "/fonts/IBMPlexSans-Regular.ttf", weight: "400", style: "normal" },
		{ path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
		{ path: "/fonts/IBMPlexSans-SemiBold.ttf", weight: "600", style: "normal" },
		{ path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
	],
});

const bebasNeue = localFont({
	src: [
		{ path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
	],
	variable: "--bebas-neue",
});

export const metadata: Metadata = {
	title: "BookWise",
	description:
		"BookWise is a book borrowing university library management solution.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${ibmPlexSans.className} ${bebasNeue.variable} antialiased`}>
				<NextTopLoader
					color="#FFE1BD"
					height={2}
					crawlSpeed={50}
					speed={1000}
					showSpinner={false}
				/>
				{children}
				<Toaster />
			</body>
		</html>
	);
}
