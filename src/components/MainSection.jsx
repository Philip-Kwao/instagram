import React from 'react'
import MainCard from './MainCard'
import Status from './Status'
import Suggest from './Suggest'

const MainSection = () => {
  return (
    <div className='m-6 flex'>
        <div className="2xl:ml-96 xl:ml-72 w-[25rem]">
            <Status />
            <MainCard />
        </div>
        <div className="ml-24">
            <Suggest />
        </div>
    </div>
  )
}

export default MainSection