import React from 'react'
import Logo from '@/assets/images/Logo-Instagram.png'
import Image from 'next/image'
import SideItemContainer from './SideItemContainer'
import SideItem from './SideItem'

import { AiOutlineMenu } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full'>
        <div className="w-full">
            <Image className='mt-6 ml-6' src={Logo} width={105} alt='instagram logo' />
            <SideItemContainer />
        </div>
        <div className="w-full">
            <SideItem icon={<AiOutlineMenu />} title={'More'} />
        </div>
    </div>
  )
}

export default Sidebar