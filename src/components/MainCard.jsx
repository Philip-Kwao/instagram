import React from 'react'
import { BiDotsHorizontal } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import CR7 from '@/assets/images/cr7.webp'
import Image from 'next/image'

const MainCard = () => {
  return (
    <article className=' w-[25rem] border'>
        <div className="flex items-center justify-between">
            <div className="flex items-center text-sm font-light">
                <img src="https://lh3.googleusercontent.com/a/AAcHTtdvU1dMd5RtdXyb-Hbto8_TBYlgs30axJdUZN3Ra5S43iE=s288-c-no" width={25} className='rounded-full' alt="" />
                KwamePhilip <span className=''><BsDot /></span>
                <span className='text-slate-400'>1d</span>
            </div>
            <span className=""><BiDotsHorizontal /> </span>
        </div>
        <div className="max-w-[500px]">
            <Image src={CR7} className='w-full my-4 rounded' alt='cr7' />
        </div>
    </article>
  )
}

export default MainCard