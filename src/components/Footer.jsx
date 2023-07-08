import React from 'react'
import FooterLink from './FooterLink'

const Footer = () => {
  return (
    <div className='text-xs font-light text-center text-stone-500 my-4'>
        <div className="my-2">
            <FooterLink url={''} title={'Meta'} />
            <FooterLink url={''} title={'About'} />
            <FooterLink url={''} title={'Blog'} />
            <FooterLink url={''} title={'Jobs'} />
            <FooterLink url={''} title={'Help'} />
            <FooterLink url={''} title={'API'} />
            <FooterLink url={''} title={'Privacy'} />
            <FooterLink url={''} title={'Terms'} />
            <FooterLink url={''} title={'Top Accounts'} />
            <FooterLink url={''} title={'Locations'} />
            <FooterLink url={''} title={'Instagram Lite'} />
            <FooterLink url={''} title={'Threads'} />
            <FooterLink url={''} title={'Contact Uploading & Non-Users'} />
            <FooterLink url={''} title={'Meta Verified'} />
        </div>
        <div className="">
            <select className='bg-transparent' name="" id="">
                <option className='bg-transparent' value="English">English</option>
            </select>
            <span className="ml-2">
                &copy;2023 Instagram from Meta
            </span>
        </div>
    </div>
  )
}

export default Footer