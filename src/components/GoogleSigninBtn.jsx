"use client"
import Image from 'next/image'
import GoogleIcon from '@/assets/images/googleicon.png'
import { signIn, useSession } from 'next-auth/react'

const GoogleSigninBtn = () => {
    const { data: session } = useSession()
  return (
    <div>
        {/* Google Authentication */}
                          
        <div className="flex items-center justify-center">
            <Image src={GoogleIcon} width={25} alt='google icon' />
          {" "}
           <span onClick={() => signIn("google")} className='cursor-pointer hover:underline underline-offset-4 font-semibold my-4 text-blue-400'>Log in with Google</span>
        </div>
    </div>
  )
}

export default GoogleSigninBtn