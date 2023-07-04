import React, { useEffect, useState } from 'react'

const comments = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    
        const getComments = async() => {
            const res = await fetch('/api/comments/Index')
            const data = await res.json()
            setComments(data)
        }

        const postComment = async() => {
            const res = await fetch('/api/comments/Index', {
                method: 'POST',
                body: JSON.stringify({comment}),
                headers: {'Content-Type' : 'application/json'}
            })
            const data = await res.json()
            console.log(data);
            getComments()
        }
        
        const deleteComment = async (commentId) => {
            const res = await fetch(`/api/comments/${commentId}`, {
                method: 'DELETE',
            })
            const data = await res.json()
            console.log(data);
            getComments()
        }
       
        
    
  return (
    <div>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button className='border border-red-100 p-2' onClick={postComment}>Post Comment</button>
        <button className='border border-red-100 p-2' onClick={getComments}>Load Comments</button>
        {comments.map((e) => <div key={e.id}>
            <h2>{e.text}</h2>
            <button  onClick={() => deleteComment(e.id)} className='border border-green-300 p-1'>Delete</button>
        </div>)}
    </div>
  )
}

export default comments