import React, { useEffect, useState } from 'react'

const posts = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [posts, setPosts] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
  
        getPost()
    },[posts])
    
 if (loading) return <h2>loading...</h2>
 const getPost = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    setPosts(data)
    setLoading(false)
}
    const submitPost = async(e) => {
        e.preventDefault()
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', 
            body: JSON.stringify({title: title, body:body}),
            headers: {'Content-Type' : 'application/json'}
        })
        const data = await res.json()
       getPost()
        console.log(data);
    }
    return (
    <div>

    <form action="" onClick={submitPost}>
        <h2>Submit your post</h2>
        <input className='border border-black' type="text" placeholder='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input  className='border border-black' type="text" placeholder='body' value={body} onChange={(e) => setBody(e.target.value)}/>
        <button className='border bg-red-200 px-2' type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default posts