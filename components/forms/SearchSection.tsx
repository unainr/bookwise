"use client"
import { useState } from "react";
import SearchBooks from "@/components/forms/SearchForm";
import BookCoverAdmin from "../admin/BookCoverAdmin";
import Link from "next/link";
import { SearchBookResult } from "@/lib/formschema";

const SearchSection = () => {
    const [searchResults, setSearchResults] = useState<SearchBookResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchResults = (results: SearchBookResult[], query: string) => {
    setSearchResults(results);
    setSearchQuery(query);
    setIsSearching(query.trim() !== "");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto">
      <p className="uppercase text-[#D6E0FF] text-sm font-medium tracking-wider">
        Discover Your Next Great Read
      </p>
      <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        Explore and Search <br className="hidden sm:block" />
        for{" "}
        <span className="text-[#FFE1BD] relative">
          Any Book
          <svg
            className="absolute w-full h-3 -bottom-1 left-0 text-[#FFE1BD]/30"
            viewBox="0 0 100 12"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 Q50,12 100,0"
              stroke="currentColor"
              strokeWidth="3"
              fill="none"
            />
          </svg>
        </span>{" "}
        In Our Library
      </h1>
      <p className="text-[#D6E0FF]/80 text-base mt-2 max-w-2xl">
        Browse through thousands of titles across various genres, from classics to contemporary bestsellers.
      </p>

      <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
        <SearchBooks onSearchResults={handleSearchResults} />
      </div>

      {/* Show search results only if there's an active search */}
      {isSearching && (
        <div className="mt-10 w-full">
          <h2 className="text-white text-xl font-semibold mb-4 text-left">
            {searchResults.length > 0 
              ? `Search Results for "${searchQuery}" (${searchResults.length})` 
              : `No books found for "${searchQuery}"`}
          </h2>
          
          {searchResults.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
              {searchResults.map((book) => (
                <div key={book.id}>
                  <Link href={`/${book.id}`}>
                  <div className="relative h-40 sm:h-48 md:h-56 lg:h-64  overflow-hidden">
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
                        {book.genra}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center py-10 bg-[#232839]/50 rounded-lg">
              <p className="text-[#D6E0FF]/70">No matching books found</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchSection;