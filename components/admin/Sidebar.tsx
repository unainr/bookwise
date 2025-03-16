'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Avatar, AvatarFallback } from '../ui/avatar';


import { cn } from '@/lib/utils';
import { adminSideBarLinks } from '@/constants';
import SignOut from '../forms/SignOut';


// Helper function to get initials from name
const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();
};

// Sidebar links configuration
const sidebarLinks = [
  {
    route: "/dashboard",
    text: "Dashboard",
    img: "/icons/dashboard.svg"
  },
  {
    route: "/books",
    text: "Books",
    img: "/icons/books.svg"
  },
  {
    route: "/authors",
    text: "Authors",
    img: "/icons/authors.svg"
  },
  {
    route: "/genres",
    text: "Genres",
    img: "/icons/genres.svg"
  },
  {
    route: "/members",
    text: "Members",
    img: "/icons/members.svg"
  },
  {
    route: "/settings",
    text: "Settings",
    img: "/icons/settings.svg"
  }
];

const Sidebar =  ({ session }: { session: any }) => {
  const pathname = usePathname();



  return (
    <div className="sticky left-0 top-0 flex h-dvh flex-col justify-between bg-[#ffffff] shadow px-5 pb-5 pt-10 transition-all duration-300 ease-in-out">
      <div>
        <div className="flex flex-row items-center gap-2 border-b border-dashed border-blue-400/20 pb-6 max-md:justify-center">
          <div className="relative size-10 flex items-center justify-center bg-blue-900 rounded-lg">
            <Image
              src="/icons/logo.svg"
              alt="logo"
              height={24}
              width={24}
              className="brightness-0 invert"
            />
          </div>
          <h1 className="text-2xl font-bold text-black max-md:hidden">BookWise</h1>
        </div>

        <div className="mt-10 flex flex-col gap-2">
          {adminSideBarLinks.map((link) => {
            const isSelected =
              (link.route !== "/" &&
                pathname.includes(link.route) &&
                link.route.length > 1) ||
              pathname === link.route;

            return (
              <Link 
                href={link.route} 
                key={link.route} 
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 hover:bg-blue-900 hover:text-white",
                  isSelected ? "bg-blue-900 text-white" : " text-gray-300"
                )}
              >
                <div className="relative size-5 flex-shrink-0">
                  <Image
                    src={link.img}
                    alt={link.text}
                    fill
                    className={cn(
                      "object-contain",
                      isSelected ? "brightness-0 invert" : ""
                    )}
                  />
                </div>
                <p className={cn(
                  "text-sm font-medium max-md:hidden",
                  isSelected ? "text-white" : "text-black"
                )}>
                  {link.text}
                </p>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="my-8 flex w-full flex-row gap-2 rounded-full border border-light-400 px-6 py-2 shadow-sm max-md:px-2">
        <Avatar className="h-10 w-10 border border-blue-500/20">
          <AvatarFallback className="bg-blue-900 text-white">
            {getInitials(session?.user?.name || "BW")}
          </AvatarFallback>
        </Avatar>

        <div className="flex flex-col max-md:hidden">
          <p className="font-semibold">{session?.user?.name || "User Name"}</p>
          <p className="text-xs text-gray-400">{session?.user?.email || "user@example.com"}</p>
        </div>
          <SignOut/>
      </div>
    </div>
  );
};

export default Sidebar;
