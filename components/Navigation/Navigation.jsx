import React from 'react'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Navlink from './Navlink'

const Index = () => {
  const [toggle, setToggle] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const handleWidth = () => {
    setWindowWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', handleWidth)
    if (windowWidth > 1024) {
      setToggle(false)
    }
  },[windowWidth])
  return (
    <nav className='relative flex justify-between items-center p-5 border-b border-b-slate-300 lg:border-b-0'>
      <div className='text-lg lg:hidden'>
        <ion-icon name="search"></ion-icon> 
      </div>

      <div>
        <h2 className='lg:hidden font-semibold text-lg'>Little Library Project</h2>
        <Image src={logo} height={200} width={200} alt='logo' className='hidden lg:block'></Image>
      </div>

      <div className='hidden lg:flex'>
      <Navlink/>
      </div>

      <div className='text-lg lg:hidden' onClick={() => setToggle(!toggle)}>
        {/* true show x  */}
        <ion-icon name={toggle ? 'close' : 'menu'}></ion-icon> 
      </div>

      <div className={`absolute top-0 left-0  bg-white border border-gray-200 w-[300px] z-20 flex flex-col text-sm lg:hidden duration-500 ${!toggle ? 'left-[-100%]' : 'left-0'}`}>
        <Navlink/>
      </div>
    </nav>
  )
}

export default Index