import React from 'react'
import BookCoverAdmin from '@/components/admin/BookCoverAdmin'
import { Button } from '@/components/ui/button'
import { getBookById } from '@/lib/actions/createbook.action'
import { 
    User, 
    BookOpen, 
    Star, 
    BookMarked, 
    Library, 
    BookText, 
    Bookmark 
  } from "lucide-react";
const BookDetailsPage = async ({params}:{params:Promise<{id:number}>}) => {
    const bookId = (await params).id
    const id = Number(bookId)
    const response = await getBookById(id)
  return (
    <>
   <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-white p-4 relative overflow-hidden">
  {/* Background gradient effect */}
  <div className="absolute inset-0  opacity-70 z-0"></div>
  <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl opacity-20"></div>
  <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
  
  {/* Left Column - Text Content */}
  <div className="flex flex-col justify-center px-4 md:px-8 lg:px-16 pt-6 z-10 backdrop-blur-sm bg-black/10 rounded-2xl shadow-xl">
    <div className="inline-block mb-2">
      <span className="px-3 py-1 text-xs font-medium tracking-wider text-[#E7C9A5] uppercase bg-[#E7C9A5]/10 rounded-full">
        Featured
      </span>
    </div>
    
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#E7C9A5]">
      {response.book?.title}
    </h1>
    
    <div className="text-base md:text-lg lg:text-xl text-light-100 space-y-4">
      <div className="flex flex-wrap items-center gap-3 md:gap-4">
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
          <User size={16} className="opacity-80" />
          <p>
            By{" "}
            <span className="font-semibold text-[#E7C9A5]">
              {response.book?.author}
            </span>
          </p>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
          <BookText size={16} className="opacity-80" />
          <p>
            <span className="font-semibold text-[#E7C9A5]">
              {response.book?.genra}
            </span>
          </p>
        </div>
        
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm">
          <Star size={18} className="text-[#E7C9A5]" />
          <p className="text-[#E7C9A5] font-semibold">5.6</p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mt-2 bg-white/5 p-3 rounded-xl backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#E7C9A5]/20 flex items-center justify-center">
            <Library size={20} className="text-[#E7C9A5]" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Total Books</p>
            <p className="font-semibold text-[#E7C9A5]">
              {response.book?.totalBooks}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-[#E7C9A5]/20 flex items-center justify-center">
            <BookOpen size={20} className="text-[#E7C9A5]" />
          </div>
          <div>
            <p className="text-sm text-gray-400">Available Books</p>
            <p className="font-semibold text-[#E7C9A5]">56</p>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute -left-2 top-0 w-1 h-full bg-[#E7C9A5]"></div>
        <p className="mt-4 text-justify text-base md:text-lg lg:text-xl text-light-100 pl-4 italic">
          Experience a timeless classic that has captivated readers for generations.
        </p>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-3 mt-6">
        <Button className="min-h-12 bg-[#E7C9A5] text-dark-100 hover:bg-[#E7C9A5]/90 max-md:w-full flex items-center gap-2 px-6 rounded-full shadow-lg shadow-[#E7C9A5]/20 transition-all duration-300 hover:translate-y-[-2px]">
          <BookMarked size={18} className="text-black" />
          <p className="text-base md:text-lg font-medium text-black">Borrow Book Request</p>
        </Button>
      </div>
    </div>
  </div>
  
  {/* Right Column - Book Cover */}
  <div className="flex justify-center items-center z-10">
    <div className="relative my-6 md:my-10 group">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#E7C9A5]/20 to-transparent rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Main book cover with reflection effect */}
      <div className="relative z-20 transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-1">
        <BookCoverAdmin
          varient="wide"
          className="z-10 rounded-2xl shadow-2xl"
          bookColor={response.book?.bookColor || '#000000'}
          bookImage={response.book?.bookImage || ''}
        />
        
        {/* Reflection */}
        <div className="absolute -bottom-10 left-0 right-0 h-20 bg-gradient-to-b from-[#E7C9A5]/30 to-transparent blur-md transform scale-y-[-0.3] scale-x-[0.95] opacity-50"></div>
      </div>
      
      {/* Background books */}
      <div className="absolute left-6 md:left-16 top-4 md:top-10 rotate-12 opacity-40 hidden sm:block transform transition-all duration-500 group-hover:rotate-6 group-hover:-translate-x-2">
        <BookCoverAdmin
          varient="wide"
          className="rounded-2xl shadow-xl"
          bookColor={response.book?.bookColor || '#000000'}
          bookImage={response.book?.bookImage || ''}
        />
      </div>
      
      <div className="absolute right-6 md:right-16 bottom-4 md:bottom-10 -rotate-12 opacity-40 hidden sm:block transform transition-all duration-500 group-hover:-rotate-6 group-hover:translate-x-2">
        <BookCoverAdmin
          varient="wide"
          className="rounded-2xl shadow-xl"
          bookColor={response.book?.bookColor || '#000000'}
          bookImage={response.book?.bookImage || ''}
        />
      </div>
      
      {/* Floating badges */}
      <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-sm font-medium text-white shadow-lg z-30">
        New Release
      </div>
      
      <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-[#E7C9A5] text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg z-30 group-hover:scale-110 transition-transform duration-300">
        Read Now
      </div>
    </div>
  </div>
</section>

  
  <div className="container mx-auto py-8 px-4">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#D6E0FF] mb-8 text-center">
    Book Summary
  </h1>
  
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
    {/* Left Column - Book Summary */}
    <div className=" rounded-lg p-6 shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-[#D6E0FF] mb-4">
        Summary
      </h2>
      <div className="prose prose-invert max-w-none">
        <p className="text-base md:text-md leading-7 italic text-gray-300">
          {response.book?.bookSummary || ""}
        </p>
      </div>
    </div>
    
    {/* Right Column - Additional Information */}
    <div className=" rounded-lg p-6 shadow-lg">
      <h2 className="text-xl md:text-2xl font-bold text-[#D6E0FF] mb-4">
        What You'll Learn
      </h2>
      <ul className="space-y-3 text-gray-200">
        <li className="flex items-start">
          <span className="mr-2 text-[#D6E0FF]">•</span>
          <span>Key concepts and principles from the book</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-[#D6E0FF]">•</span>
          <span>Important themes and messages</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-[#D6E0FF]">•</span>
          <span>Practical applications of the book's ideas</span>
        </li>
        <li className="flex items-start">
          <span className="mr-2 text-[#D6E0FF]">•</span>
          <span>Author's perspective and background</span>
        </li>
      </ul>
      
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-[#D6E0FF] mb-2">
          Book Details
        </h3>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-200">
          <span>Author:</span>
          <div>{response.book?.author || "Unknown"}</div>
          <span>Published:</span>
          <div>{response.book?.createdAt.toLocaleDateString() || "Unknown"}</div>
          <span>Books Copies:</span>
          <div>{response.book?.totalBooks || "Unknown"}</div>
          <span>Genre:</span>
          <div>{response.book?.genra || "Unknown"}</div>
        </div>
      </div>
    </div>
  </div>
</div>
  </>
  )
}
export default BookDetailsPage