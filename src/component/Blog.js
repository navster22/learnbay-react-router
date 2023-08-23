import React, { useContext } from 'react'
import { Blogs } from '../context/BlogContext'
import { useParams } from 'react-router-dom'

export default function Blog() {

  const { state } = useContext(Blogs)

  const {id} = useParams()

  return (
    <div>
        <h2>{state[id].title}</h2>
        <p>{state[id].description}</p>
    </div>
  )
}
