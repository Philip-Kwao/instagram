import React from 'react'
import MainCard from './MainCard'
import Suggestion from './Suggestion'
import Status from './Status'

const MainSection = () => {
  return (
    <div className='m-6 flex'>
        <div className="2xl:ml-96 xl:ml-72 w-full">
            <Status />
            <MainCard />
        </div>
        <div className="ml-24">
            <Suggestion />
        </div>
    </div>
  )
}

export default MainSection