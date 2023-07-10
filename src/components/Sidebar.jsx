import React from 'react'
import SideItemContainer from './SideItemContainer'
import SideItem from './SideItem'

import { AiOutlineMenu } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className='flex flex-col justify-between items-center w-full'>
        <div className="w-full">
            <SideItemContainer />
        </div>
        <div className="w-full">
            <SideItem icon={<AiOutlineMenu />} title={'More'} />
        </div>
    </div>
  )
}

export default Sidebar