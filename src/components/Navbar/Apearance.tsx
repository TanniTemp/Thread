import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'

function Apearance(
    
) {
  const [user , setUser] = useState(true)
  useEffect(()=>{
    setUser(true)
  })
  return (
  
      <div >
        {
          user&&(
            <div className={cn("relative flex")}>
            <Image src={'/options-icon.svg'} className='z-[1] hidden md:absolute hover:opacity-0' height={30} width={30} alt={''} />
            <Image src={'/option-selected.svg'} className='-z-1  ' height={30} width={30} alt={''} />
             </div>
          )||(
              <Button  className='md:m-0 m-1'>
                Login
              </Button>
          )
        }
      </div>
  
  )
}

export default Apearance