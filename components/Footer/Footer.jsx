import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <footer className='p-5 space-y-5 text-sm w-screen '>
        <div className=' lg:border-none space-x-10 pt-5'>
            <Link href={'/'}>Terms and conditions</Link>
            <Link href={'/'}>Privacy Policy</Link>
        </div>
        <h2 className='font-bold'>LITTLE LIBRARY PROJECT</h2>
        <div>
            <h2 className='font-semibold'>TEAM CAMBODIA</h2>
            <ul>
                <li>Address : 24th Floor, AMASS CENTRAL TOWER,  1, Phnom Penh, Cambodia </li>
                <li className='hover:text-blue-500'><a href='mailto:littlelibraryprojectworld@gmail.com'>Email : littlelibraryprojectworld@gmail.com</a></li>
                <li>Contact : 'Little Library Project' official Facebook page</li>
            </ul>
        </div>
        <div>
            <h2 className='font-semibold'>TEAM CAMBODIA</h2>
            <ul>
                <li>Address : Future-Field 417, Seoul Innovation Park, Tongil Street 684, Eunpyeong District, Seoul, Republic of Korea </li>
                <li className='hover:text-blue-500'><a href='mailto:littlelibraryprojectworld@gmail.com'>Email : littlelibraryprojectworld@gmail.com</a></li>
                <li>Contact: +82 10 9548 4549</li>
            </ul>
        </div>
        <h2 className='font-bold'>Copyright ⓒ 2023 Little Library Project All rights reserved.</h2>
    </footer>
  )
}

export default Footer