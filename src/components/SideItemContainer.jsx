'use client'
import { GoHeart, GoHomeFill, GoSearch } from 'react-icons/go'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { TbSquareRoundedPlus } from 'react-icons/tb'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'

import SideItem from './SideItem'
import SearchContainer from './SearchContainer'
import { useState } from 'react'
import Image from 'next/image'

import Logo from '@/assets/images/Logo-Instagram.png'
import { BsInstagram } from 'react-icons/bs'



const SideItemContainer = () => {
  const [search, setSearch] = useState(false)
  const searchBtn = () =>{
    setSearch(!search)
  }
  return (
    <>
      {search === false ? <Image className='mt-6 ml-6' src={Logo} width={105} alt='instagram logo' />:<BsInstagram className='mt-6 ml-8 text-2xl' />}
      <div className="mt-5 ">
                  <div className="">
                    <SideItem icon={<GoHomeFill />} title={'Home'} />
                  </div>
                
                  <div onClick={searchBtn} className="">
                    <SideItem icon={<GoSearch />} title={'Search'} />
                    <div className={`${search===false ? 'hidden':'flex'}`}>
                      <SearchContainer />
                    </div>
                  </div>
                
                
                    <SideItem icon={<FaRegCompass />} title={`${search===false ? 'Explore':''} `} />
                
                
                    <SideItem icon={<BiMoviePlay />} title={`${search===false ? 'Reels':''} `} />
                
                
                    <SideItem icon={<RiMessengerLine />} title={`${search===false ? 'Messages':''} `} />
                
                
                    <SideItem icon={<GoHeart />} title={`${search===false ? 'Notifications':''} `} />
                
                
                    <SideItem icon={<TbSquareRoundedPlus />} title={`${search===false ? 'Create':''} `} />
                
                
                    <SideItem icon={<HiOutlineUserCircle />} title={`${search===false ? 'Profile':''} `} />
      </div>
    </>
  )
}

export default SideItemContainer