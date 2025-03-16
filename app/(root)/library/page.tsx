import BookList from '@/components/BookList'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'

const LibraryPage = () => {
  return (
    <>
    <div className='flex flex-col justify-center items-center gap-4 text-center max-w-3xl mx-auto'>
    <p className='uppercase text-[#D6E0FF] text-sm font-medium tracking-wider'>
      Discover Your Next Great Read
    </p>
    <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'>
      Explore and Search <br className="hidden sm:block" /> 
      for <span className='text-[#FFE1BD] relative'>
        Any Book
        <svg className="absolute w-full h-3 -bottom-1 left-0 text-[#FFE1BD]/30" viewBox="0 0 100 12" preserveAspectRatio="none">
          <path d="M0,0 Q50,12 100,0" stroke="currentColor" strokeWidth="3" fill="none" />
        </svg>
      </span> In Our Library
    </h1>
    <p className="text-[#D6E0FF]/80 text-base mt-2 max-w-2xl">
      Browse through thousands of titles across various genres, from classics to contemporary bestsellers.
    </p>
    <div className="relative w-full max-w-md md:max-w-lg lg:max-w-xl mx-auto">
  <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4 pointer-events-none">
    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#FFE1BD]/80" />
  </div>
  <Input
    type="text"
    placeholder="Search for books..."
    className="w-full py-2 sm:py-3 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-white h-10 sm:h-12 bg-[#232839]/90 border-[#D6E0FF]/20 rounded-lg focus:ring-[#FFE1BD]/50 focus:border-[#FFE1BD]/50 placeholder-[#D6E0FF]/60"
  />
</div>


  </div>
  <div className='mt-10'>

  <BookList booktitle="Search Results" />
  </div>
  </>
  
  )
}

export default LibraryPage