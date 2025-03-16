import React from 'react'
import Header from './Header'
import { getSession } from "@/lib/getSession";


const Navbar = async () => {
 const session = await getSession();
    return (
    <>
    <Header session={session}/>
    </>
  )
}

export default Navbar