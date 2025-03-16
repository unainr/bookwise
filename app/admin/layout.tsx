import Header from '@/components/admin/Header'
import Sidebar from '@/components/admin/Sidebar'
import { getSession } from '@/lib/getSession';
import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';
import React from 'react'

const layout = async ({children}:{children:React.ReactNode}) => {
   const session = await getSession();
   if (!session || !session.user) {
    redirect('/sign-in');
  }
  const user = await prisma.user.findUnique({
    where: { 
      id: Number(session.user.id) 
    },
    select: { 
      role: true 
    }
  });
  if (!user || user.role !== 'ADMIN') {
    redirect('/'); 
  }
  return (
    <main className="flex min-h-screen w-full flex-row">
    <Sidebar session={session}  />

    <div className="flex w-[calc(100%-264px)]  flex-1 flex-col bg-light-500 p-5 xs:p-10">
      <Header  session={session}   />
      {children}
    </div>
  </main>
  )
}

export default layout