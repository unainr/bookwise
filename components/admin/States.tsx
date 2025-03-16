import { BookMarked, BookOpen } from 'lucide-react'
import React from 'react'

const States = () => {

    return (
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {/* Borrow Books Card */}
      <div className='bg-white shadow-md rounded-xl p-6 border border-gray-50 hover:shadow-lg transition-shadow duration-300'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-3'>
            <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Borrow books</p>
            <h1 className='text-3xl font-bold text-gray-800 flex items-end'>
              145
              <span className='text-xs font-medium text-green-500 ml-2 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                12%
              </span>
            </h1>
          </div>
          <div className='p-3 bg-blue-50 rounded-lg'>
            <BookMarked className="h-6 w-6 text-blue-600" />
          </div>
        </div>
        <p className='text-xs text-gray-500 mt-4'>Total books borrowed this month</p>
      </div>
    
      {/* Total Users Card */}
      <div className='bg-white shadow-md rounded-xl p-6 border border-gray-50 hover:shadow-lg transition-shadow duration-300'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-3'>
            <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Total Users</p>
            <h1 className='text-3xl font-bold text-gray-800 flex items-end'>
              317
              <span className='text-xs font-medium text-green-500 ml-2 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                8%
              </span>
            </h1>
          </div>
          <div className='p-3 bg-purple-50 rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        <p className='text-xs text-gray-500 mt-4'>Active registered users</p>
      </div>
    
      {/* Total Books Card */}
      <div className='bg-white shadow-md rounded-xl p-6 border border-gray-50 hover:shadow-lg transition-shadow duration-300'>
        <div className='flex items-start justify-between'>
          <div className='flex flex-col gap-3'>
            <p className='text-sm font-medium text-gray-500 uppercase tracking-wide'>Total books</p>
            <h1 className='text-3xl font-bold text-gray-800 flex items-end'>
              163
              <span className='text-xs font-medium text-green-500 ml-2 flex items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                5%
              </span>
            </h1>
          </div>
          <div className='p-3 bg-amber-50 rounded-lg'>
            <BookOpen className="h-6 w-6 text-amber-600" />
          </div>
        </div>
        <p className='text-xs text-gray-500 mt-4'>Books available in library</p>
      </div>
    </div>
    
  )
}

export default States