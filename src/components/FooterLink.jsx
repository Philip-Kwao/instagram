import Link from 'next/link'
import React from 'react'

const FooterLink = ({url, title}) => {
  return (
    <Link className='mx-2 hover:underline duration-200 ease-in-out' href={url}>{title}</Link>
  )
}

export default FooterLink