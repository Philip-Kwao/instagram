import React from 'react'
import { BiDotsHorizontal, BiMessageRounded } from 'react-icons/bi'
import { BsDot } from 'react-icons/bs'
import { GoHeart } from 'react-icons/go'
import { PiPaperPlaneTiltBold, PiSmileyLight } from 'react-icons/pi'
import { LiaBookmarkSolid } from 'react-icons/lia'

import CR7 from '@/assets/images/cr7.webp'
import Image from 'next/image'

const MainCard = () => {
  return (
    <article className=' w-[25rem] border-b pb-4'>
        <div className="flex items-center justify-between">
            <div className="flex items-center text-sm font-light">
                <img src="https://lh3.googleusercontent.com/a/AAcHTtdvU1dMd5RtdXyb-Hbto8_TBYlgs30axJdUZN3Ra5S43iE=s288-c-no" width={25} className='rounded-full' alt="" />
                <span className="mx-2">KwamePhilip</span> <span className=''><BsDot /></span>
                <span className='text-slate-400'>1d</span>
            </div>
            <span className="cursor-pointer hover:text-slate-500"><BiDotsHorizontal /> </span>
        </div>
        <div className="max-w-[500px]">
            <Image src={CR7} className='w-full my-4 rounded' alt='cr7' />
        </div>
        <section className="flex justify-between items-center mb-2">
            <div className="flex items-center basis-3/12 justify-between text-2xl">
                <div className="hover:cursor-pointer">
                    <GoHeart />
                </div>
                <div className="hover:cursor-pointer">
                    <BiMessageRounded />
                </div>
                <div className="hover:cursor-pointer">
                    <PiPaperPlaneTiltBold />
                </div>
            </div>
            <div className="flex items-center justify-end basis-9/12 text-2xl hover:cursor-pointer">
                <LiaBookmarkSolid />
            </div>
        </section>
        <div className="text-left text-sm font-light">28 likes</div>
        <div className="text-xs">
            <span className="font-bold">KwamePhilip </span>
            <span className="text-slate-500">Thank you once again for your love and support</span>
        </div>
        <div className="flex my-2">
            <form action="" className="flex flex-1">
                <input className='w-full outline-none border-none text-xs' type="text" placeholder='Add a comment...' />
            </form>
            <span className="hover:cursor-pointer"><PiSmileyLight /></span>
        </div>
    </article>
  )
}

export default MainCard