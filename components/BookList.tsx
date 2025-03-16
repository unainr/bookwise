import { getAllBooks } from "@/lib/actions/createbook.action";
import React from "react";
import BookCoverAdmin from "./admin/BookCoverAdmin";
import Link from "next/link";

const BookList = async ({booktitle}: {booktitle: string}) => {
	const response = await getAllBooks();
	if (!response.success) {
		return null;
	}
	return (
    <section className="container mx-auto px-4 py-6 md:py-8">
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D6E0FF]">
      {booktitle}
      </h2>
    </div>
  
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6">
      {response.success && 
        response.books && 
        response.books.map((book: any) => (
          <div
            key={book.id}
            className="flex flex-col h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <Link href={`/${book.id}`}>
            <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden">
              {book.bookImage && (
                <BookCoverAdmin
                  bookColor={book.bookColor}
                  bookImage={book.bookImage}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
            </Link>
  
            <div className="flex flex-col flex-grow p-3 sm:p-4 text-white">
              <h3 className="text-md sm:text-md font-semibold line-clamp-2 mb-1">
                {book.title}
              </h3>
              <p className="text-xs sm:text-sm italic text-gray-400 line-clamp-1 mb-1 sm:mb-2">
                {book.author}
              </p>
  
              <div className="flex items-center mt-auto">
                <span className="inline-block text-white px-2 py-1 text-xs font-medium rounded-full">
                  {book.genre}
                </span>
              </div>
            </div>
          </div>
        ))
      }
    </div>
  </section>
	);
};

export default BookList;
