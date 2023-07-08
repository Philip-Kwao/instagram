import { GoHeart, GoHomeFill, GoSearch } from 'react-icons/go'
import { FaRegCompass } from 'react-icons/fa'
import { BiMoviePlay } from 'react-icons/bi'
import { TbSquareRoundedPlus } from 'react-icons/tb'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiMessengerLine } from 'react-icons/ri'

import SideItem from './SideItem'

const SideItemContainer = () => {
  return (
    <div className="mt-10">
            
                <SideItem icon={<GoHomeFill />} title={'Home'} />
            
            
                <SideItem icon={<GoSearch />} title={'Search'} />
            
            
                <SideItem icon={<FaRegCompass />} title={'Explore'} />
            
            
                <SideItem icon={<BiMoviePlay />} title={'Reels'} />
            
            
                <SideItem icon={<RiMessengerLine />} title={'Messages'} />
            
            
                <SideItem icon={<GoHeart />} title={'Notifications'} />
            
            
                <SideItem icon={<TbSquareRoundedPlus />} title={'Create'} />
            
            
                <SideItem icon={<HiOutlineUserCircle />} title={'Profile'} />
            
        </div>
  )
}

export default SideItemContainer