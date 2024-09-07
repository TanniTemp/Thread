import React from 'react'
import Navmenu from './NavMenu'
import NavIcon from './NavIcon'
import Apearance from './Apearance'

function Navbar() {
  return (
    <div >
         <div className='md:hidden backdrop-blur-md w-[100vw] fixed grid grid-cols-3 p-3 py-1 '>
            <div>

            </div>
            <div className='flex items-center justify-center'>
                <NavIcon/>
            </div>
            <div className='flex justify-end '>
                    <Apearance/>
            </div>
        </div>
        <div className='backdrop-blur-md fixed bottom-3 flex md:hidden'>
            <Navmenu/>
        </div>


        {/* large device navbar */}

        <div className='md:flex fixed hidden flex-col justify-between items-center px-2 pt-4 pb-10 h-[100vh]'>
            <NavIcon/>
            <Navmenu/>
            <Apearance/>
        </div>

       

    </div>
  )
}

export default Navbar