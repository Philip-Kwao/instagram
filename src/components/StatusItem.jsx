import Image from 'next/image'
import React from 'react'
import CR7 from '@/assets/images/cr7.webp'

const StatusItem = () => {
  return (
    <div className='m-2'>
        <div className="flex flex-col items-center">
            <div className="w-[50px] h-[50px] border-gradient rounded-full">
                <Image className='rounded-full w-full h-full border-white border' src={CR7} alt='status image' />
            </div>
            <span className='text-sm font-light'>JohnDoe</span>
        </div>
    </div>
  )
}

export default StatusItem