import BookList from "@/components/BookList";
import SearchSection from "@/components/forms/SearchSection";
import React from "react";

const LibraryPage = () => {
	return (
		<>
			<SearchSection />
			<div className="mt-10">
				<BookList booktitle="All Books" />
			</div>
		</>
	);
};

export default LibraryPage;
