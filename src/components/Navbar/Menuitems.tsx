import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Menuitems(
    {href , isActive, activeImage, notActiveImage}:{
        href:string
        isActive:boolean
        activeImage:string
        notActiveImage:string
    }
) {
  return (
    <Link href={href}>
            {isActive&&(
                <Image src={notActiveImage} alt={''} height={25} width={25} />
             )||(
                <Image src={activeImage} alt={''} height={25} width={25} />
             )
}
    </Link>
  )
}

export default Menuitems