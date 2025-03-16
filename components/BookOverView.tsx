import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import BookCover from "./BookCover";

export interface booksProps {
	id: string;
	title: string;
	author: string;
	genra: string;
	rating: number;
	totalCopies: number;
	availableCopies: number;
	description: string;
	coverColor: string;
	coverUrl: string;
	videoUrl: string;
	summary: string;
}
const BookOverView = ({ sampleBooks }: { sampleBooks: booksProps }) => {
	const {
		title,
		author,
		genra,
		rating,
		totalCopies,
		availableCopies,
		description,
		coverColor,
		coverUrl,
		videoUrl,
		summary,
	} = sampleBooks;
	return (
		<section className="grid grid-cols-1 gap-8 md:grid-cols-2 text-white">
			{/* Left Column - Text Content */}
			<div className="flex flex-col justify-center px-16 mt-10">
				<h1 className="text-5xl md:text-6xl font-semibold mb-6">{title}</h1>

				<div className="text-xl text-light-100 space-y-3">
				
				

					<div className="flex justify-center items-center gap-2">
					<p>
						By{" "}
						<span className="font-semibold text-light-200 text-[#E7C9A5]">
							{author}
						</span>
					</p>
					<p>
						Category{" "}
						<span className="font-semibold text-light-200 text-[#E7C9A5]">
							{genra}
						</span>
					</p>
						<Image src="/icons/star.svg" alt="star" width={22} height={22} />
						<p className="text-[#E7C9A5] font-semibold">{rating}</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 mt-1">
						<p>
							Total Books{" "}
							<span className="font-semibold text-[#E7C9A5]">
								{totalCopies}
							</span>
						</p>
						<p>
							Available Books{" "}
							<span className="font-semibold text-[#E7C9A5]">
								{availableCopies}
							</span>
						</p>
					</div>

					<p className="mt-4 text-justify text-xl text-light-100">
						{description}
					</p>

					<Button className="mt-6 min-h-14 w-fit bg-[#E7C9A5] text-dark-100 hover:bg-[#E7C9A5]/90 max-md:w-full flex items-center gap-2">
						<Image src="/icons/book.svg" alt="books" width={22} height={22} />
						<p className="text-xl text-black">Borrow</p>
					</Button>
				</div>
			</div>

			{/* Right Column - Book Cover */}
			<div className="flex justify-center items-center">
				<div className="relative my-10">
					<BookCover
						varient="wide"
						className="z-10"
						coverColor={coverColor}
						coverUrl={coverUrl}
					/>
					<div className="absolute left-16 top-10 rotate-12 opacity-40 max-sm:hidden">
						<BookCover
							varient="wide"
							coverColor={coverColor}
							coverUrl={coverUrl}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BookOverView;
