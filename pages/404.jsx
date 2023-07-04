import React from 'react'
import style from '../styles/404.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'
const index = () => {
    const router = useRouter()
  return (
    <div className={`absolute z-20 p-10 top-0 left-0 bg-white w-screen text-red-500 h-screen text-center items-center  ${style.redirect}`}>
        <div className='font-bold text-4xl text-red-500'>
            <p>404</p>
            <button className='text-sm font-thin border-b border-b-red-500' onClick={() => router.push('/')}>Return</button>
        </div>
    </div>
  )
}

export default index