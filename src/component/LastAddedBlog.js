import React, { useContext } from 'react'
import { Blogs } from '../context/BlogContext'

export default function LastAddedBlog() {

  const { state } = useContext(Blogs)

  return (
    <div>
        <h2>{state[state.length-1].title}</h2>
        <p>{state[state.length-1].description}</p>
    </div>
  )
}
