'use client'
import minifaker, { jobTitle } from 'minifaker'
import 'minifaker/locales/en'
import { useEffect, useState } from "react"
import Suggestion from './Suggestion'
import MiniProfile from './MiniProfile'
import FooterLink from './FooterLink'

const Suggest = () => {
    const [suggestFollower, setSuggestFollower] = useState([])
    useEffect(()=>{
        const follower = minifaker.array(5, (i)=>(
            {
                followerName: minifaker.username({locale:'en'}).toLowerCase(),
                id:i,
                img:`https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
                jobTitle: minifaker.jobTitle(),
            }
            ))
            setSuggestFollower(follower)
            console.log(suggestFollower)
    },[])
  return (
    <>
        <MiniProfile />
        <div className="flex items-center justify-between my-6">
          <span className='font-light text-sm text-slate-300'>Suggestions For You</span>
          <div className="">
            <button className='font-semibold text-xs'>See All</button>
          </div>
      </div>
        <div>
            {suggestFollower.map(suggestion => (
                <Suggestion key={suggestion.id} img={suggestion.img} jobTitle={suggestion.jobTitle} followerName={suggestion.followerName} />
            ))}
        </div>
        <div className="text-xs font-light mt-6">
            <div className="w-full">
                <FooterLink url={''} title={'About'} />
                <FooterLink url={''} title={'Help'} />
                <FooterLink url={''} title={'Press'} />
                <FooterLink url={''} title={'API'} />
                <FooterLink url={''} title={'Jobs'} />
                <FooterLink url={''} title={'Privacy'} />
                <br />
                <FooterLink url={''} title={'Terms'} />
                <FooterLink url={''} title={'Locations'} />
                <FooterLink url={''} title={'Language'} />
                <FooterLink url={''} title={'Meta Verified'} />
            </div>
            <div className="my-4">
                <FooterLink url={''} title={'&copy; 2023 INSTAGRAM FROM META'} />
            </div>
        </div>
    </>
  )
}

export default Suggest