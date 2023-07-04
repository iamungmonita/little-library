import React from 'react'
import { navlinks } from '@/constants/nav_const'
import Link from 'next/link'
import {useState} from 'react'
import style from '../../styles/Navigation.module.scss'
import { useRouter } from 'next/router'

const Navlink = () => {
    const [chevron, setChevron] = useState(false)
    const [heading, setHeading] = useState('')
    const router = useRouter()

  return (
    <div>
        <div className='text-sm space-x-5 hidden items-center lg:flex relative'>
            {navlinks.map((navlink) => <Link className={`${style.borderBottomHover} group`} key={navlink.id} href={navlink.path}>{navlink.link}
            {navlink.subcategory && 
                <div className='absolute '>
                    {navlink.sublinks.map((e) => 
                    <p className={`hidden border-b p-2 group-hover:block hover:block ${style.sublink}`} key={e.id} href={e.subpath}>{e.sublink}</p>)}
                </div>
            }
            </Link>)}
        </div>
        
        {/* mobile */}
        <div className={`lg:hidden h-screen`}>
            {navlinks.map((navlink) => 
                <div key={navlink.id}>
                    <div className='  flex items-center justify-between border-b' onClick={() => heading !== navlink.link ? setHeading(navlink.link) : setHeading('')}>
                        <Link className={`${style.borderBottomHoverMobile} relative `} key={navlink.id} href={navlink.path}>
                        {navlink.link}  
                        </Link>
                        {navlink.subcategory && 
                        <div className='pr-5'>
                            <ion-icon name={`chevron-${heading === navlink.link ? 'up' : 'down'}-outline`}></ion-icon>
                        </div>}
                    </div>
                    <div className={` ${heading === navlink.link ? 'block' : 'hidden'} duration-500`}>
                    {navlink.sublinks && navlink.sublinks.map((e) => 
                        <div key={e.id} className={`flex flex-col justify-center items-start bg-slate-100 px-10 border-b border-b-gray-300`}>
                            <button className='py-2 '>{e.sublink}</button>
                        </div>
                    )}
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Navlink