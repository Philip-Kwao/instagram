import Image from 'next/image'
import React from 'react'
import CR7 from '@/assets/images/cr7.webp'

const MiniProfile = () => {
  return (
    <div>
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
                <button className='text-blue-500 font-semibold text-xs'>Switch</button>
            </div>
        </div>
    </div>
  )
}

export default MiniProfile