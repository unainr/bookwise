import React from 'react';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';



const Header = ({ session }: { session: any }) => {
  return (
    <header className="flex lg:flex-row flex-col justify-between items-start  lg:items-center gap-5 mb-6 lg:mb-10 w-full">
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-dark-400">
          Welcome, {session?.user?.name || 'User'}
        </h2>
        <p className="text-base text-slate-500 mt-1">
          Monitor all of your users and books here
        </p>
      </div>

      <div className="relative w-full lg:w-auto lg:min-w-[320px]">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Search size={18} />
        </div>
        <Input
          type="text"
          placeholder="Search books, authors, genres..."
          className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 w-full focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
        />
      </div>
    </header>
  );
};

export default Header;
