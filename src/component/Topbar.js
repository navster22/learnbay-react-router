import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export default function 
() {
  return (
    <div className='topBar'>
     <Link className='topBarItem' to='/'>Home</Link>
     <Link className='topBarItem' to='/docs'>Docs</Link>
     <Link className='topBarItem' to='/add-blog'>Add blog</Link>
    </div>
  )
}
