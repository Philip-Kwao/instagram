import Link from 'next/link'
import React from 'react'

const Suggestion = ({key, img, jobTitle, followerName}) => {
  return (
    <div className="my-2">
      {/* Suggestions */}
      <div className="flex items-center justify-between" key={key}>
        <div className='flex items-center w-72'>
          <div className="w-[50px] h-[50px] rounded-full">
            <img src={img} alt='suggestion' className='rounded-full w-full h-full' />
          </div>
          <div className="flex flex-col ml-2">
            <span className='font-bold text-sm'>{followerName}</span>
            <span className="text-slate-300 font-light text-xs">suggested for you</span>
          </div>
        </div>
        <div className="">
          <Link href={''} className='text-blue-500 font-semibold text-xs'>Follow</Link>
        </div>
      </div>
    </div>
  )
}

export default Suggestion