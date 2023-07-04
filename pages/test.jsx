import React from 'react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
const test = () => {
    const [loading, setLoading] = useState(true)
    const [data , setData] = useState(null)
    useEffect(() => {
        const getData = async() => {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const result = await res.json()
            setData(result)
            setLoading(false)
        }
        getData()
    },[])

    if (loading) {
        return <h2>loading...</h2>
    }
    

  return (
    <div className='max-w-6xl mx-auto p-5 space-y-5 lg:columns-2 '>
      {data.map((e) => 
      <Link href={`/test/[id]`} as={`/test/${e.id}`} className='flex flex-col pb-5 border-b-2 border-b-black-200 h-40'>
        <h2 className='font-semibold'>{e.title}</h2>
        <p>{e.body}</p>
      </Link>)}
    </div>
  )
}

export default test

