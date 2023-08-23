import React, { useContext } from 'react'
import { Blogs } from '../context/BlogContext'
import { useNavigate } from 'react-router-dom'

export default function Home() {

  const { state } = useContext(Blogs)

  const navigate = useNavigate()

  return (
    <div className='homePage'>
        {state
         ? 
            state.map((item)=>{
                return (
                <div onClick={()=>navigate(`/blog/${item.id}`)} key={item.id} className='blogCard'>
                    <h3>{`${item.id+1}) `}{item.title}</h3>
                    <p>{item.description}</p>
                </div>
                )
            })
         : <p>No blogs available</p>}
    </div>
  )
}
