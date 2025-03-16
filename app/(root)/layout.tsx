import Navbar from '@/components/ui/Navbar'
import { getSession } from '@/lib/getSession';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

const layout =  async({children}:{children:React.ReactNode}) => {
  const session = await getSession();
  // If user is logged in, check their role
  if (session && session.user) {
    // Fetch user from database to check role
    const user = await prisma.user.findUnique({
      where: { 
        id: Number(session.user.id) 
      },
      select: { 
        role: true 
      }
    });
    
    // If user is an admin, redirect them to admin dashboard
    if (user && user.role === 'ADMIN') {
      redirect('/admin');
    }
  }
  return (
<main className="bg-[url('/images/pattern.webp')] bg-cover bg-top min-h-screen w-full overflow-x-hidden">

     <Navbar/>
      {children}
      </main>
  )
}

export default layout
