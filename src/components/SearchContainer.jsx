import React from 'react'
import { MdCancel } from 'react-icons/md'

const SearchContainer = () => {
  return (
    <>
        <div className="absolute left-[72px] 2xl:left-[75px] z-10 bg-white w-3/12 h-screen top-0 border shadow-xl rounded-r-xl ">
            <div className='px-6 pt-6'>
                <div className="font-bold text-lg mb-5">Search</div>
                <form action="" className='bg-stone-100 flex items-center rounded-lg'>
                    <input type="text" placeholder='Search' className='bg-transparent flex-1 font-light h-10 pl-2 outline-none' />
                    <span className='mr-2 text-stone-300 text-opacity-80 cursor-pointer'><MdCancel /> </span>
                </form>
            </div>
            <span className='absolute h-[0.5px] top-32 w-full bg-stone-300'></span>
            <div className="mt-6 ml-6">
                <span className='capitalize font-bold'>recent</span>
            </div>
        </div>
    </>
  )
}

export default SearchContainer