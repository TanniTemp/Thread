import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavIcon() {
  return (
    
    <Link href={'/'} className='md:hover:scale-125 transition-all ease-in-out'>
    <Image src={'/threads.png'} alt={''} height={45} width={45} />
    </Link>
  )
}

export default NavIcon