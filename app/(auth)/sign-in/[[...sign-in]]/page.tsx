import { SignIn } from '@clerk/nextjs'
import React from 'react'

const  SignInPage = () => {
  return (
    <main className='flex h-screen w-full items-centerjustify-center'>
        <SignIn />
    </main>
  )
}

export default  SignInPage
