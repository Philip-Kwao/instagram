import Link from 'next/link'
import React from 'react'

const FooterLink = ({url, title}) => {
  return (
    <Link className='mx-2' href={url}>{title}</Link>
  )
}

export default FooterLink