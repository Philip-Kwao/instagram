'use client'
import { useEffect, useState } from "react"
import minifaker from 'minifaker'
import 'minifaker/locales/en'
import StatusItem from "./StatusItem"

const Story = () => {
    const [storyUser, setStoryUser] = useState([])
    useEffect(()=>{
        const storyUser = minifaker.array(20, (i)=>(
            {
                username: minifaker.username({locale:'en'}).toLowerCase(),
                img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
                id: i,
            }
        ))
        setStoryUser(storyUser)
        console.log(storyUser)
    },[])
  return (
    <div className="flex items-center overflow-x-scroll scrollbar-none">
        {storyUser.map(user => (
            <StatusItem key={user.id} img={user.img} username={user.username} />
        ))}
    </div>
  )
}

export default Story