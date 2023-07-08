import React from 'react'
import MainCard from './MainCard'
import Suggestion from './Suggestion'

const MainSection = () => {
  return (
    <div className='m-6 flex'>
        <div className="flex-1">
            <MainCard />
        </div>
        <div className="">
            <Suggestion />
        </div>
    </div>
  )
}

export default MainSection