import React from 'react';
import { getAllBooks } from '@/lib/actions/createbook.action';
import BookCoverAdmin from './BookCoverAdmin';
import {  PencilIcon, TrashIcon } from 'lucide-react';

const AllBooks = async () => {
  const response = await getAllBooks();
  
  return (
    <div className="w-full">
      <div className="rounded-md border overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="py-3 px-4 text-left font-medium text-gray-500">Book</th>
              <th className="py-3 px-4 text-left font-medium text-gray-500">Author</th>
              <th className="py-3 px-4 text-left font-medium text-gray-500">Genre</th>
              <th className="py-3 px-4 text-left font-medium text-gray-500">Date</th>
              <th className="py-3 px-4 text-right font-medium text-gray-500">Actions</th>
            </tr>
          </thead>
          <tbody>
  {response.success && response.books && response.books.map((book) => (
    <tr key={book.id} className="border-b hover:bg-gray-50">
      <td className="py-4 px-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          <div className="h-24 w-16 sm:h-28 sm:w-20 flex-shrink-0 overflow-hidden rounded">
            <BookCoverAdmin 
              bookColor={book.bookColor} 
              bookImage={book.bookImage} 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="font-medium mt-2 sm:mt-0">{book.title}</div>
        </div>
      </td>
      <td className="py-3 px-4 ">{book.author}</td>
      <td className="py-3 px-4">
        <span className="inline-flex items-center rounded-full  px-2 py-1 text-xs font-medium ">
          {book.genra}
        </span>
      </td>
      <td className="py-3 px-4 hidden md:table-cell">
        {new Date(book.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })}
      </td>
      <td className="py-3 px-4 text-right">
        <div className="flex justify-end gap-2">
          
          <button className="rounded p-1 text-blue-600 hover:bg-blue-50">
           <PencilIcon className="h-4 w-4"/>
          </button>
      
          <button className="rounded p-1 text-red-600 hover:bg-red-50">
            <TrashIcon className="h-4 w-4" />
          </button>
        </div>
      </td>
    </tr>
  ))}
</tbody>


        </table>
      </div>
    </div>
  );
};

export default AllBooks;