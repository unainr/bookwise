import SignupForm from '@/components/forms/SignupForm'
import { getSession } from '@/lib/getSession';
import { redirect } from 'next/navigation';
import React from 'react'

const SignUpPage = async() => {
  const session = await getSession();
	const user = session?.user;
	if(user) redirect('/'); 
  return (
    <>
    <SignupForm/>
    </>
  )
}

export default SignUpPage