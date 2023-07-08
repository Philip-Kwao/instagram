import Image from 'next/image'
import React from 'react'
import Iphone1 from '@/assets/images/iphone-1.png'
import Iphone2 from '@/assets/images/iphone-2.png'
import InstagramLogo from '@/assets/images/Logo-Instagram.png'
import GoogleIcon from '@/assets/images/googleicon.png'
import GooglePlay from '@/assets/images/googleplay.png'
import Microsoft from '@/assets/images/microsoft.png'
import Link from 'next/link'
import Footer from './Footer'

const Auth = () => {
    const handleForm = () => {

    }
  return (
    <div className='flex flex-col justify-around h-screen'>
        <div className='max-w-3xl flex items-center justify-around mx-auto text-sm font-light '>
                <div className="relative">
                    
                        <Image className="absolute top-0 -left-[8rem] z-0" src={Iphone2} width={300} height={300} alt='phone' />
                    
                        <Image className='' src={Iphone1} width={300} height={300} alt='phone' />
                </div>
            <div className="flex flex-col w-96">
                {/* Form Section */}
                <div className="border text-center flex flex-col items-center justify-around">
                    <Image src={InstagramLogo} width={200} alt='instagram logo' />
                    <form className='flex flex-col flex-wrap w-full' onSubmit={handleForm()} action="">
                        <input className='mx-6 bg-stone-100 border-2 rounded border-y-2 h-8 px-2 mb-4 outline-none' type="text" placeholder='email address' />
                        <input className='mx-6 bg-stone-100 border-2 rounded border-y-2 h-8 px-2 mb-4 outline-none' type="password" placeholder='password' />
                        <button className='mx-6 mb-4 bg-blue-400 rounded-lg text-white h-8'>login</button>
                    </form>
                        <div className="relative">
                            <span className='absolute bg-stone-200 h-[1px] w-28 -left-[8rem] top-[0.7rem]'></span>
                            <span className='uppercase text-stone-400'>or</span>
                            <span className='absolute bg-stone-200 h-[1px] w-28 -right-[8rem] top-[0.7rem]'></span>
                        </div>
                        <div className="flex items-center justify-center">
                            <Image src={GoogleIcon} width={25} alt='google icon' />
                            {" "}
                            <span className='cursor-pointer hover:underline underline-offset-4 font-semibold my-4 text-blue-400'>Log in with Google</span>
                        </div>
                        <span className='mb-4 hover:underline'>Forgot Password?</span>
                </div>
                <div className="border flex items-center text-center mx-auto w-full justify-center  h-20 my-4">
                    Don't have an account?  <Link className='ml-2 font-semibold text-blue-400' href={''}>Sign Up</Link>
                </div>
                <div className="flex flex-col items-center">
                    <span className="mb-2">Get the app</span>
                    <div className="flex">
                        <Image src={GooglePlay} width={120} alt='google play' />
                        <Image className='ml-2' src={Microsoft} width={120} alt='microsoft' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Auth