import React from "react";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { getAllBooks } from "@/lib/actions/createbook.action";
import BookCoverAdmin from "./BookCoverAdmin";
import { Calendar, ChevronRight, PlusIcon } from "lucide-react";
import Link from "next/link";

const BorrowRequest = async () => {
	const response = await getAllBooks();

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
			{/* First Card */}
			<div className="w-full">
				<Card className="h-full ">
					<CardHeader className=" rounded-t-lg ">
						<CardTitle className="flex flex-row justify-between items-center">
							<span className="text-gray-800 text-[1.4rem] font-semibold flex items-center gap-2">
								Borrow Requests
							</span>
							<Button
								variant="ghost"
								className="bg-[#F8F8FF] text-[#25388C] hover:text-blue-8">
								View all <ChevronRight className="h-4 w-4 ml-1" />
							</Button>
						</CardTitle>
					</CardHeader>
					<CardContent className="p-4 relative overflow-hidden">
						{/* Books list */}
						<div className="space-y-3 max-h-96 overflow-hidden pr-1 pb-10">
							{response.success &&
								response.books &&
								response.books.slice(0, 3).map((book) => (
									<div
										key={book.id}
										className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-[#F8F8FF] rounded-lg hover:bg-[#F0F0FF] transition-all duration-200">
										<BookCoverAdmin
											bookColor={book.bookColor}
											bookImage={book.bookImage}
											className="h-20 w-16 sm:h-24 sm:w-18 object-cover rounded-md shadow-sm"
										/>
										<div className="text-center sm:text-left w-full">
											<p className="text-sm font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-200 mt-2 sm:mt-0">
												{book.title}
											</p>
											<p className="text-xs text-gray-500 italic mt-1">
												by {book.author}
											</p>
											<p className="text-xs text-gray-900 mt-1 flex items-center justify-center sm:justify-start gap-1">
												<Calendar className="h-4 w-4" />{" "}
												{book.createdAt.toLocaleDateString()}
											</p>
										</div>
									</div>
								))}
						</div>

						{/* Smoke/Fade effect */}
						<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
					</CardContent>
				</Card>
			</div>

			{/* Second Card */}
			<div className="w-full">
				<Card className="h-full">
					<CardHeader className="rounded-t-lg">
						<CardTitle className="flex flex-row justify-between items-center">
							<span className="text-gray-800 text-[1.4rem] font-semibold flex items-center gap-2">
								Recently Added Books
							</span>
							<Button
								variant="ghost"
								className="bg-[#F8F8FF] text-[#25388C] hover:text-blue-8">
								View all <ChevronRight className="h-4 w-4 ml-1" />
							</Button>
						</CardTitle>
						<Link href="/admin/addbooks">
							<Button
								className="p-6 px-4 flex items-center gap-3 bg-[#F8F8FF] hover:bg-[#F0F0FF] text-[#25388C] justify-start w-full"
								variant="ghost">
								<div className="bg-white p-2 rounded-full shadow-sm">
									<PlusIcon className="h-4 w-4 text-[#25388C]" />
								</div>
								<span>Add Book</span>
							</Button>
						</Link>
					</CardHeader>
					<CardContent className="p-4 relative">
						{/* Books list with thin scrollbar */}
						<div className="space-y-3 max-h-96 overflow-y-auto pr-1 pb-10 ">
							{response.success &&
								response.books &&
								response.books.slice(3, 8).map((book, index) => (
									<div
										key={book.id}
										className="flex flex-col sm:flex-row items-center gap-3 p-3 bg-[#FBF8FF] rounded-lg hover:bg-[#F8F0FF] transition-all duration-200 border border-purple-50">
										<BookCoverAdmin
											bookColor={book.bookColor}
											bookImage={book.bookImage}
											className="h-20 w-16 sm:h-24 sm:w-18 object-cover rounded-md shadow-sm"
										/>
										<div className="text-center sm:text-left w-full">
											<p className="text-sm font-semibold text-gray-800 hover:text-gray-900 transition-colors duration-200 mt-2 sm:mt-0">
												{book.title}
											</p>
											<p className="text-xs text-gray-500 italic mt-1">
												by {book.author}
											</p>
											<p className="text-xs text-gray-900 mt-1 flex items-center justify-center sm:justify-start gap-1">
												<Calendar className="h-4 w-4" />{" "}
												{book.createdAt.toLocaleDateString()}
											</p>
										</div>
									</div>
								))}
						</div>

						{/* Smoke/Fade effect at the bottom */}
						<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none"></div>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default BorrowRequest;
