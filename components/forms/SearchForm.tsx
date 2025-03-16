'use client'
import { useState, useTransition } from 'react'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { searchBooks } from '@/lib/actions/createbook.action'
import { SearchBookResult } from '@/lib/formschema'



interface SearchBooksProps {
    onSearchResults?: (results: SearchBookResult[], query: string) => void
}

const SearchBooks = ({ onSearchResults }: SearchBooksProps) => {
  const [query, setQuery] = useState('')
  const [isPending, startTransition] = useTransition()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    
    startTransition(async () => {
      const results = await searchBooks(value)
      if (onSearchResults) {
        // Cast the results to match the expected type
        onSearchResults(results as SearchBookResult[], value)
      }
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    startTransition(async () => {
      const results = await searchBooks(query)
      if (onSearchResults) {
        // Cast the results to match the expected type
        onSearchResults(results as SearchBookResult[], query)
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="w-full relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 sm:pl-4">
        <Search className="h-5 w-5 text-[#FFE1BD]/60" />
      </div>
      
      <Input
        type="text"
        placeholder="Search for books..."
        className="w-full py-2 sm:py-3 pl-10 sm:pl-12 pr-4 text-sm sm:text-base text-white h-10 sm:h-12 bg-[#232839]/90 border-[#D6E0FF]/20 rounded-lg focus:ring-[#FFE1BD]/50 focus:border-[#FFE1BD]/50 placeholder-[#D6E0FF]/60"
        value={query}
        onChange={handleSearch}
      />
      
      {isPending && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <div className="h-4 w-4 border-2 border-t-transparent border-[#FFE1BD]/50 rounded-full animate-spin"></div>
        </div>
      )}
    </form>
  )
}

export default SearchBooks