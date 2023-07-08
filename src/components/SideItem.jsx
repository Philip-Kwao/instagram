import React from 'react'
const SideItem = ({icon, title}) => {
  return (
    <div className='flex items-center my-1 cursor-pointer hover:bg-stone-200 h-14 px-4 mx-4 rounded-lg'>
        <div className="text-3xl">
            {icon}
        </div>
        <span className='ml-3'>{title}</span>
    </div>
  )
}

export default SideItem