import SigninForm from '@/components/forms/SigninForm'
import { getSession } from '@/lib/getSession';
import { redirect } from 'next/navigation';
import React from 'react'

const SigninPage = async() => {
  const session = await getSession();
	const user = session?.user;
	if(user) redirect('/'); 
  return (
    <>
    <SigninForm/>
    </>
  )
}

export default SigninPage