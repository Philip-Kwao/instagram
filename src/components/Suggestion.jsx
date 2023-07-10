import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CR7 from '@/assets/images/cr7.webp'

const Suggestion = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between">
        <div className='flex items-center w-72'>
          <div className="w-[50px] h-[50px] rounded-full">
            <Image src={CR7} alt='suggestion' className='rounded-full w-full h-full' />
          </div>
          <div className="flex flex-col ml-2">
            <span className='font-bold text-sm'>Philip Kwao</span>
            <span className="text-slate-300 font-light text-sm">KwamePhilip</span>
          </div>
        </div>
        <div className="">
          <Link href={''} className='text-blue-500 font-semibold'>Switch</Link>
        </div>
      </div>
      
      <div className="flex items-center justify-between my-6">
          <span className='font-light text-sm text-slate-300'>Suggestions For You</span>
          <div className="">
            <Link href={''} className='font-semibold'>See All</Link>
          </div>
      </div>

      {/* Suggestions */}
      <div className="flex items-center justify-between">
        <div className='flex items-center w-72'>
          <div className="w-[50px] h-[50px] rounded-full">
            <Image src={CR7} alt='suggestion' className='rounded-full w-full h-full' />
          </div>
          <div className="flex flex-col ml-2">
            <span className='font-bold text-sm'>Philip Kwao</span>
            <span className="text-slate-300 font-light text-sm">suggested for you</span>
          </div>
        </div>
        <div className="">
          <Link href={''} className='text-blue-500 font-semibold'>Follow</Link>
        </div>
      </div>
    </div>
  )
}

export default Suggestion