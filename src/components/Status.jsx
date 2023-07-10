import React from 'react'
import StatusItem from './StatusItem'

const Status = () => {
  return (
    <div className='flex items-center border my-2'>
        <StatusItem />
        <StatusItem />
        <StatusItem />
        <StatusItem />
        <StatusItem />
    </div>
  )
}

export default Status